import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../services/prisma";
import GithubProvider from "next-auth/providers/github";

const { GITHUB_CLIENT_ID, GITHUB_SECRET } = process.env;
if (GITHUB_CLIENT_ID === undefined || GITHUB_SECRET === undefined) {
  throw new Error("GITHUB_CLIENT_ID and GITHUB_SECRET must be defined");
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET
    }),
  ],
  secret: process.env.JWT_SECRET,
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
