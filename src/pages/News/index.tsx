import React from "react";

import NewsHead from "./NewsHead";
import Announcements from "./Announcements";
import Featured from "./Featured";
import VideoUpdates from "./VideoUpdates";
import AllUpdates from "./AllUpdates";
import HowTo from "./HowTo";

import styles from "./News.module.scss";

function News() {
  return (
    <div className={styles.News}>
      <NewsHead />
      <div className={styles.BoxRow}>
        <Announcements />
        <Featured />
      </div>
      <VideoUpdates />
      <div className={styles.BoxRow}>
        <AllUpdates />
        <HowTo />
      </div>
    </div>
  );
}

export default News;
