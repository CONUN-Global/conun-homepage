import React from "react";
import NewsCard from "@/components/NewsCard";

import { NewsDataObj } from "@/types/index";

import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";

import styles from "./UpdateCard.module.scss";
import classNames from "classnames";

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

function UpdateCard({ newsData }: { newsData: NewsDataObj }) {
  return (
    <div className={styles.UpdateCard}>
      {newsData.thumbnail ? (
        <div className={styles.Thumb}></div>
      ) : (
        <div className={styles.Placeholder}>
          <Placeholder source={newsData.source} />
        </div>
      )}
      <NewsCard newsData={newsData} size="large" />
    </div>
  );
}

export default UpdateCard;
