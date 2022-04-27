import NewsHeader from "@/components/NewsHeader";
import styles from "./Press.module.scss";

type Article = {
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
  title: string;
};

type Props = {
  data: {
    display: number;
    items: Article[];
    lastBuildData: string;
    start: number;
    total: number;
  };
};

/// FIX
function NewsItem({ article }: any) {
  return (
    <div>
      <a href={article.link}>
        <h3>{article.title}</h3>
        <div>{article.description}</div>
        <div>{article.pubDate}</div>
      </a>
      <br />
      <br />
    </div>
  );
}

function Press({ data }: Props) {
  // console.log(data);

  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <NewsHeader>Press publicity</NewsHeader>
      </div>
      {data.items.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default Press;
