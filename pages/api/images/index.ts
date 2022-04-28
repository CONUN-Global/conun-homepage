import type { NextApiRequest, NextApiResponse } from "next";

const config: {
  method: string;
  headers: {};
} = {
  method: "GET",
  headers: {
    "X-Naver-Client-Id": process.env.CLIENT_ID,
    "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  const encodedUri = encodeURI(
    `https://openapi.naver.com/v1/search/image?query=${query}`
  );
  const response = await fetch(encodedUri, config);
  const data = await response.json();

  res.send(data);
}

export default handler;
