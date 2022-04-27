import News from "@/pages/NewsCopy";

export default News;

export async function getStaticProps() {
  ////MAKE THIS DYNAMMUIC
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
