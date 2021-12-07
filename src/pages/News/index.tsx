import React from "react";

import classNames from "classnames";

import NewsHead from "./NewsHead";
import Announcements from "./Announcements";
import Featured from "./Featured";
import VideoUpdates from "./VideoUpdates";
import AllUpdates from "./AllUpdates";
import Information from "./Information";

import styles from "./News.module.scss";

function News() {
  return (
    <div className={styles.News}>
      <NewsHead />
      <div className={styles.Container}>
        <div className={classNames(styles.BoxRow, styles.AnnounceFeatured)}>
          <Announcements />
          <Featured />
        </div>
        <VideoUpdates />
        <div className={classNames(styles.BoxRow, styles.AllHowTo)}>
          <AllUpdates />
          <Information />
        </div>
      </div>
    </div>
  );
}

export default News;
