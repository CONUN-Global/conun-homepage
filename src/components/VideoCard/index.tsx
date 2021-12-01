import React from "react";

import VideoPlayer from "@/components/VideoPlayer";

import { VideoDataObj } from "@/types/index";

import styles from "./VideoCard.module.scss";
import classNames from "classnames";

interface Props {
  videoData: VideoDataObj;
  size: "small" | "large";
}

function Author({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.Author}>
      <div className={styles.Picture}>{picture}</div>
      <div className={styles.By}>posted by</div>
      <div className={styles.Name}>{name}</div>
    </div>
  );
}

function VideoCard({ videoData, size }: Props) {
  return (
    <div className={classNames(styles.Grid, styles[size])}>
      <div className={classNames(styles.Video, styles[size])}>
        <VideoPlayer url={videoData.videoSrc} />
      </div>
      <div className={styles.Title}>{videoData.title}</div>
      {size == "large" && (
        <div className={styles.Caption}>{videoData.caption}</div>
      )}
      <div className={classNames(styles.DateLabel, styles[size])}>
        <span className={classNames(styles.Source, styles[size])}>
          {videoData.source}
        </span>
        <span className={classNames(styles.Divider, styles[size])}>|</span>
        <span className={classNames(styles.Date, styles[size])}>
          {videoData.date}
        </span>
      </div>
      <Author picture="C" name={videoData.author} />
    </div>
  );
}

export default VideoCard;
