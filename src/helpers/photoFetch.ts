import { server } from "./serverConfig";

async function photoFetch(article: any) {
  const res = await fetch(`${server}/api/images?query=${article.title}`);
  const data = await res.json();
  return data;
}

export default photoFetch;
