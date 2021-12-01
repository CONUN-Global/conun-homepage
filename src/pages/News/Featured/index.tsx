import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./Featured.module.scss";

import data from "./featuredData.json";
import VideoPlayer from "@/components/VideoPlayer";

function Author({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.Author}>
      <div className={styles.Picture}>{picture}</div>
      <div className={styles.By}>posted by</div>
      <div className={styles.Name}>{name}</div>
    </div>
  );
}

function Featured() {
  return (
    <div className={styles.Featured}>
      <CellHeader>Featured</CellHeader>
      <div className={styles.FeaturedGrid}>
        <div className={styles.Video}>
          <VideoPlayer url={data.videoSrc} />
        </div>
        <div className={styles.Title}>{data.title}</div>
        <div className={styles.Caption}>{data.caption}</div>
        <div className={styles.DateLabel}>
          <span className={styles.Source}>{data.source}</span>
          <span className={styles.Divider}>|</span>
          <span className={styles.Date}>{data.date}</span>
        </div>
        <Author picture="C" name="Chloe" />
      </div>
    </div>
  );
}

export default Featured;
