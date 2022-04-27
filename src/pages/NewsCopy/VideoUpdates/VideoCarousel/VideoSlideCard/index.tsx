import Author from "@/components/Author";
import { NewsDataObj } from "@/types/index";
import Link from "next/link";
import styles from "./VideoSlideCard.module.scss";
import getYoutubeThumbUrlClean from "@/helpers/getYoutubeThumbUrlClean";
interface Props {
  newsData: NewsDataObj;
}

function VideoSlideCard({ newsData }: Props) {
  console.log(newsData);
  return (
    <Link passHref href={newsData.url}>
      <a target="_blank" rel="noopener noreferrer">
        <div className={styles.NewsCard}>
          <div>
            <img
              src={getYoutubeThumbUrlClean(newsData.url)}
              alt={newsData.title}
              className={styles.Thumbnail}
            />

            <div className={styles.TextContainer}>
              <div className={styles.Title}>{newsData.title}</div>
              <div className={styles.Caption}>{newsData.caption}</div>
            </div>
          </div>
          <Author newsData={newsData} />
        </div>
      </a>
    </Link>
  );
}

export default VideoSlideCard;
