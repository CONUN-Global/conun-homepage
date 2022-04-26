import { NewsDataObj } from "@/types/index";
import styles from "./VideoSlideCard.module.scss";
interface Props {
  newsData: NewsDataObj;
}

function VideoSlideCard({ newsData }: Props) {
  console.log(newsData);
  return (
    <div className={styles.NewsCard}>
      <div>
        <img src={newsData.url} className={styles.Thumbnail} />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>{newsData.title}</div>
        <div className={styles.Caption}>{newsData.caption}</div>
      </div>
    </div>
  );
}

export default VideoSlideCard;
