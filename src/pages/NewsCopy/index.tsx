import NewsHead from "./NewsHead";
import NewsHeader from "@/components/NewsHeader";
import Featured from "./Featured";

import styles from "./News.module.scss";
import VideoUpdates from "./VideoUpdates";

function News() {
  return (
    <div className={styles.NewsPage}>
      <div className={styles.Container}>
        <NewsHead />
        <NewsHeader>Information</NewsHeader>
        <Featured />
        <VideoUpdates />
        <NewsHeader>Press publicity</NewsHeader>
      </div>
    </div>
  );
}

export default News;
