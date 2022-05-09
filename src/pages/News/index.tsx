import NewsHead from "./NewsHead";
import NewsHeader from "@/components/NewsHeader";
import Featured from "./Featured";
import NewsSearchable from "./NewsSearchable";

import styles from "./News.module.scss";
import VideoUpdates from "./VideoUpdates";

import { useState } from "react";

function News({ data }: any) {
  const [inputtedText, setInputtedText] = useState("");

  return (
    <div className={styles.NewsPage}>
      <div className={styles.Container}>
        <NewsHead
          inputtedText={inputtedText}
          setInputtedText={setInputtedText}
        />
        <NewsHeader>Information</NewsHeader>
        <Featured />
        <VideoUpdates />
        <NewsSearchable data={data} />
      </div>
    </div>
  );
}

export default News;
