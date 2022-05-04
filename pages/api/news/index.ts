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
  try {
    const url = "https://openapi.naver.com/v1/search/news?query=conun";

    const response = await fetch(url, config);
    const data = await response.json();

    res.send(data);
  } catch (error) {
    res.status(500).send({ err: error });
  }
}

export default handler;
