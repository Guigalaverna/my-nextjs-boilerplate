import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({
    status: req.statusCode,
    message: `Status code: ${req.statusCode}`
  });
};
