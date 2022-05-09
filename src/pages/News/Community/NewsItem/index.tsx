import { NewsDataObj } from "@/types/index";
import styles from "./NewsItem.module.scss";
import Author from "@/components/Author";

import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import ConunLogo from "@/assets/icons/conun-logo.svg";

import getYoutubeThumbUrlClean from "@/helpers/getYoutubeThumbUrlClean";
import classNames from "classnames";

function Placeholder({ newsData }: { newsData: NewsDataObj }) {
  switch (newsData.source) {
    case "youtube":
      return (
        <YoutubeIcon
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
    case "discord":
      return (
        <DiscordIcon
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
    case "github":
      return (
        <GithubIcon
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
    case "xangle":
      return (
        <XangleIcon
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
    case "medium":
      return (
        <MediumIcon
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
    default:
      return (
        <ConunLogo
          className={classNames(styles.Icon, styles[newsData.source])}
        />
      );
  }
}

function NewsThumb({ newsData }: { newsData: NewsDataObj }) {
  if (newsData.source === "youtube") {
    return (
      <img
        alt={newsData.title}
        src={getYoutubeThumbUrlClean(newsData.url)}
        className={styles.Image}
      />
    );
  } else {
    return <Placeholder newsData={newsData} />;
  }
}

function NewsItem({ newsData }: { newsData: NewsDataObj }) {
  return (
    <div className={styles.NewsItemContainer}>
      <a href={newsData.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.ImageContainer}>
          <NewsThumb newsData={newsData} />
        </div>
      </a>

      <div className={styles.TextContainer}>
        <a href={newsData.url} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.Title}>{newsData.title}</h3>
        </a>
        <div className={styles.Description}>{newsData.caption}</div>
        <Author newsData={newsData} />
      </div>
    </div>
  );
}

export default NewsItem;
