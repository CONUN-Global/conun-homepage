import React from "react";
import classNames from "classnames";

import NewsCard from "@/components/NewsCard";
import VideoPlayer from "@/components/VideoPlayer";

import { NewsDataObj } from "@/types/index";

import styles from "./VideoCard.module.scss";

interface Props {
  newsData: NewsDataObj;
  size: "small" | "large";
}

function VideoCard({ newsData, size }: Props) {
  return (
    <div className={classNames(styles.VideoCard, styles[size])}>
      <div className={classNames(styles.Video, styles[size])}>
        <VideoPlayer url={newsData.url} />
      </div>
      <NewsCard newsData={newsData} size={size} />
    </div>
  );
}

export default VideoCard;
