import React from "react";
import { Slide } from "pure-react-carousel";

import VideoCard from "@/components/VideoCard";

import { NewsDataObj } from "@/types/index";

import styles from "./VideoSlide.module.scss";

interface Props {
  newsData: NewsDataObj;
  slideIndex: number;
}

function VideoSlide({ slideIndex, newsData }: Props) {
  return (
    <Slide index={slideIndex}>
      <div className={styles.VideoSlide}>
        <VideoCard newsData={newsData} size={"small"} />
      </div>
    </Slide>
  );
}

export default VideoSlide;
