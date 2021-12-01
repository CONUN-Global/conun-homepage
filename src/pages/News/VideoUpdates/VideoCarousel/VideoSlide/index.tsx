import React from "react";
import { Slide } from "pure-react-carousel";

import VideoCard from "@/components/VideoCard";

import { VideoDataObj } from "@/types/index";

import styles from "./VideoSlide.module.scss";

interface Props {
  videoData: VideoDataObj;
  slideIndex: number;
}

function VideoSlide({ slideIndex, videoData }: Props) {
  return (
    <Slide index={slideIndex}>
      <div className={styles.VideoSlide}>
        <VideoCard videoData={videoData} size={"small"} />
      </div>
    </Slide>
  );
}

export default VideoSlide;
