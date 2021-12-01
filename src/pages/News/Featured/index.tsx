import React from "react";

import VideoCard from "@/components/VideoCard";

import styles from "./Featured.module.scss";

import data from "./featuredData.json";
import CellHeader from "@/components/CellHeader";

// This component will probably handle fetching the featured data

function Featured() {
  return (
    <div className={styles.Featured}>
      <CellHeader>Featured</CellHeader>
      <div className={styles.VideoCard}>
        <VideoCard videoData={data} size={"large"} />
      </div>
    </div>
  );
}

export default Featured;
