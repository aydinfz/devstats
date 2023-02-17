import type { NextApiRequest, NextApiResponse } from 'next'

import * as services from '@services/platform/codewars';
import * as templates from '@components/codewars';
import { prepareSVGResponse } from '@services/platform/response';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await prepareSVGResponse(req.query, services, templates);
  if (result.success === false) return res.status(result.status).json({ message: result.error })

  res.setHeader('Content-Type', result.contentType || "image/svg+xml")
  return res.status(result.status).send(result.data);
}