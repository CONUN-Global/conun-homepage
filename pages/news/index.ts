import News from "@/pages/News";

export default News;

export async function getStaticProps() {
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

  const url = "https://openapi.naver.com/v1/search/news?query=conun";

  const response = await fetch(url, config);
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 100000,
  };
}
