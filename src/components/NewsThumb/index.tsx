import React from "react";
import Image from "next/image";

import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";

import styles from "./NewsThumb.module.scss";
import classNames from "classnames";
import getYoutubeThumbUrl from "@/helpers/getYoutubeThumbUrl";
import getYoutubeThumbUrlClean from "@/helpers/getYoutubeThumbUrlClean";
import { NewsDataObj } from "@/types/index";

function YTThumb({
  YTUrl,
  thumbnailClean,
}: {
  YTUrl: string;
  thumbnailClean: boolean;
}) {
  if (thumbnailClean) {
    return (
      <a href={YTUrl} target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line */}
        <img
          src={getYoutubeThumbUrlClean(YTUrl)}
          alt=""
          className={styles.YTThumb}
        />
      </a>
    );
  }
  return (
    <a href={YTUrl} target="_blank" rel="noreferrer">
      {/* eslint-disable-next-line */}
      <img src={getYoutubeThumbUrl(YTUrl)} alt="" className={styles.YTThumb} />
    </a>
  );
}

function Placeholder({ source }: { source: string }) {
  switch (source) {
    case "youtube":
      return (
        <YoutubeIcon className={classNames(styles.Icon, styles[source])} />
      );
    case "discord":
      return (
        <DiscordIcon className={classNames(styles.Icon, styles[source])} />
      );
    case "github":
      return <GithubIcon className={classNames(styles.Icon, styles[source])} />;
    case "xangle":
      return <XangleIcon className={classNames(styles.Icon, styles[source])} />;
    case "medium":
      return <MediumIcon className={classNames(styles.Icon, styles[source])} />;
    default:
      return null;
  }
}

function NewsThumb({
  newsData,
  thumbnailClean = false,
}: {
  newsData: NewsDataObj;
  thumbnailClean?: boolean;
}) {
  if (newsData.source === "youtube" && newsData.url) {
    return <YTThumb YTUrl={newsData.url} thumbnailClean={thumbnailClean} />;
  }

  return (
    <a
      className={styles.NewsThumb}
      href={newsData.url}
      target="_blank"
      rel="noreferrer"
    >
      {newsData.thumbnail ? (
        <Image src={newsData.thumbnail} className={styles.ThumbImg} alt="" />
      ) : (
        <Placeholder source={newsData.source} />
      )}
    </a>
  );
}

export default NewsThumb;
