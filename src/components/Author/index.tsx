import styles from "./Author.module.scss";

import { NewsDataObj } from "@/types/index";
import Icon from "./Icon";

interface Props {
  newsData: NewsDataObj;
}

function Author({ newsData }: Props) {
  return (
    <div className={styles.PostInfo}>
      <Icon source={newsData.source} />
      <div className={styles.Author}>Posted by {newsData.author}</div>
      <div className={styles.Date}>{newsData.date}</div>
    </div>
  );
}

export default Author;
