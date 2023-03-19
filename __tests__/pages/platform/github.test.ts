import { testApiHandler } from "next-test-api-route-handler";
import handlePlatformAPI from "@/services/api/handler";

import { encode } from "querystring";

import * as services from "@/services/platform/github";
import * as templates from "@/views/queries/github";

const handler = handlePlatformAPI("github", services, templates);
const methods = Object.keys(services);

describe("Github Platform APIs", () => {
  methods.forEach((method) => {
    test(`/api/platform/github?method=${method}`, async () => {
      await testApiHandler({
        handler,
        requestPatcher: (req) => {
          req.url = `/api/platform/github?${encode({
            method,
            uid: "6405534466df6b87ed0adb53",
          })}`;
        },
        test: async ({ fetch }) => {
          const res = await fetch({ method: "GET" });
          expect(res.status).toBe(200);

          const xml = await res.text();
          expect(xml.indexOf("<svg")).toBe(0);
        },
      });
    });

    test(`/api/platform/github?method=${method}&returnType=json`, async () => {
      await testApiHandler({
        handler,
        requestPatcher: (req) => {
          req.url = `/api/platform/github?${encode({
            method,
            uid: "6405534466df6b87ed0adb53",
            returnType: "json",
          })}`;
        },
        test: async ({ fetch }) => {
          const res = await fetch({ method: "GET" });
          expect(res.headers.get("content-type")).toContain("application/json");
          expect(res.status).toBe(200);

          const json = await res.json();
          expect(json).toHaveProperty("data");
        },
      });
    });
  });
});

export {};
