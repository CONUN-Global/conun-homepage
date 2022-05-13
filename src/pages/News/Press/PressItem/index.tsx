import { Article } from "@/types/index";
import styles from "./PressItem.module.scss";
import Icon from "@/assets/icons/conun-logo.svg";

function PressItem({ article }: Article) {
  const date = new Date(article.pubDate);

  const ImageUrl =
    article?.image?.items?.length > 0 ? (
      <img
        alt={article.title}
        src={article?.image?.items[0].thumbnail}
        className={styles.Image}
      />
    ) : (
      <Icon />
    );

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.CardContainer}>
        <div className={styles.ImageContainer}>{ImageUrl}</div>
        <div className={styles.TextContainer}>
          <h3 className={styles.Title}>{article.title}</h3>
          <div className={styles.Description}>
            {article.description.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <div className={styles.Date}>{date.toLocaleDateString("ko-KR")}</div>
        </div>
      </div>
    </a>
  );
}

export default PressItem;
