import News from "@/pages/News";
import { NewsArticle } from "@/types/index";

export default News;

export async function getStaticProps() {
  const config: {
    headers: {};
  } = {
    headers: {
      "X-Naver-Client-Id": process.env.CLIENT_ID,
      "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
    },
  };

  ////Get News Articles
  const url = "https://openapi.naver.com/v1/search/news?query=conun";

  const response = await fetch(url, config);
  const { items: ArticleData } = await response?.json();

  /// Get Images
  async function photoFetch(title: string) {
    const encodedUri = encodeURI(
      `https://openapi.naver.com/v1/search/image?query=${title}`
    );
    try {
      const response = await fetch(encodedUri, config);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const promises = ArticleData.map(async (article: NewsArticle) => {
    return {
      ...article,
      image: await photoFetch(article.title),
    };
  });

  const promiseData = await Promise.all(promises);

  return {
    props: {
      data: promiseData,
    },
    revalidate: 100000,
  };
}
