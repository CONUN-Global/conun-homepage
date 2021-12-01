import React from "react";
import classNames from "classnames";

import NewsCard from "@/components/NewsCard";
import VideoPlayer from "@/components/VideoPlayer";

import { VideoDataObj } from "@/types/index";

import styles from "./VideoCard.module.scss";

interface Props {
  videoData: VideoDataObj;
  size: "small" | "large";
}

function VideoCard({ videoData, size }: Props) {
  return (
    <div className={classNames(styles.VideoCard, styles[size])}>
      <div className={classNames(styles.Video, styles[size])}>
        <VideoPlayer url={videoData.videoSrc} />
      </div>
      <NewsCard videoData={videoData} size={size} />
    </div>
  );
}

export default VideoCard;
