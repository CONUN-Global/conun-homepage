import NewsHead from "./NewsHead";
import NewsHeader from "@/components/NewsHeader";
import Featured from "./Featured";

import styles from "./News.module.scss";
import VideoUpdates from "./VideoUpdates";
import Press from "./Press";
import Community from "./Community";

function News({ data }: any) {
  return (
    <div className={styles.NewsPage}>
      <div className={styles.Container}>
        <NewsHead />
        <NewsHeader>Information</NewsHeader>
        <Featured />
        <VideoUpdates />
        <Press data={data} />
        <Community />
      </div>
    </div>
  );
}

export default News;
