import React from "react";
import { Slide } from "pure-react-carousel";

import VideoSlideCard from "../VideoSlideCard";

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
        <VideoSlideCard newsData={newsData} />
      </div>
    </Slide>
  );
}

export default VideoSlide;