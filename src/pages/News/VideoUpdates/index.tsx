import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./VideoUpdates.module.scss";
import VideoCarousel from "./VideoCarousel";

function VideoUpdates() {
  return (
    <div className={styles.VideoUpdates}>
      <CellHeader>Video Updates</CellHeader>
      <VideoCarousel />
    </div>
  );
}

export default VideoUpdates;
