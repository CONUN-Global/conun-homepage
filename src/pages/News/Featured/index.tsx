import React from "react";

import CellHeader from "@/components/CellHeader";
import VideoCard from "@/components/VideoCard";

import styles from "./Featured.module.scss";

import data from "../newsData.json";

// This component will probably handle fetching the featured data

function Featured() {
  return (
    <div className={styles.Featured}>
      <CellHeader>Featured</CellHeader>
      <div className={styles.VideoCard}>
        <VideoCard newsData={data[0]} size={"large"} />
      </div>
    </div>
  );
}

export default Featured;
