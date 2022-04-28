async function photoFetch(article: any) {
  const res = await fetch(
    `http://localhost:3000/api/images?query=${article.title}`
  );
  const data = await res.json();
  return data;
}

export default photoFetch;
