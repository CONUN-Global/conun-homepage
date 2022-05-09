import News from "@/pages/News";
import { server } from "@/helpers/serverConfig";

export default News;

export async function getStaticProps() {
  const res = await fetch(`${server}/api/news`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 100000,
  };
}
