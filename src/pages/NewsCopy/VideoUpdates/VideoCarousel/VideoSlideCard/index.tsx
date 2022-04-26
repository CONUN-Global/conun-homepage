import React from "react";
import classNames from "classnames";

import NewsCard from "@/components/NewsCard";

import { NewsDataObj } from "@/types/index";

import styles from "./VideoSlideCard.module.scss";
import NewsThumb from "@/components/NewsThumb";

interface Props {
  newsData: NewsDataObj;
  size: "small" | "large";
}

function VideoSlideCard({ newsData, size }: Props) {
  return (
    <div className={classNames(styles.VideoCard, styles[size])}>
      <div className={classNames(styles.Video, styles[size])}>
        <NewsThumb newsData={newsData} />
      </div>
      <NewsCard newsData={newsData} size={size} />
    </div>
  );
}

export default VideoSlideCard;
