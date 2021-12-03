import React from "react";
import classNames from "classnames";

import NewsCard from "@/components/NewsCard";
import VideoPlayer from "@/components/VideoPlayer";

import { NewsDataObj } from "@/types/index";

import styles from "./VideoCard.module.scss";
import NewsThumb from "../NewsThumb";

interface Props {
  newsData: NewsDataObj;
  size: "small" | "large";
}

function VideoCard({ newsData, size }: Props) {
  return (
    <div className={classNames(styles.VideoCard, styles[size])}>
      <div className={classNames(styles.Video, styles[size])}>
        {size === "large" ? (
          <VideoPlayer url={newsData.url} />
        ) : (
          <NewsThumb newsData={newsData} />
        )}
      </div>
      <NewsCard newsData={newsData} size={size} />
    </div>
  );
}

export default VideoCard;
