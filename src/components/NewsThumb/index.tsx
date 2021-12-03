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
import { NewsDataObj } from "@/types/index";

function YTThumb({ YTUrl }: { YTUrl: string }) {
  return (
    <img src={getYoutubeThumbUrl(YTUrl)} alt="" className={styles.YTThumb} /> //eslint-disable-line
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

function NewsThumb({ newsData }: { newsData: NewsDataObj }) {
  if (newsData.source === "youtube" && newsData.url) {
    return <YTThumb YTUrl={newsData.url} />;
  }

  return (
    <div className={styles.NewsThumb}>
      {newsData.thumbnail ? (
        <Image src={newsData.thumbnail} className={styles.ThumbImg} alt="" />
      ) : (
        <Placeholder source={newsData.source} />
      )}
    </div>
  );
}

export default NewsThumb;
