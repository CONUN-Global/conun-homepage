import React from "react";
import Image from "next/image";

import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";

import styles from "./NewsThumb.module.scss";
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

function NewsThumb({
  source,
  thumbUrl,
}: {
  source: string;
  thumbUrl: string | undefined;
}) {
  return (
    <div className={styles.NewsThumb}>
      {thumbUrl ? (
        <Image src={thumbUrl} className={styles.ThumbImg} alt="" />
      ) : (
        <Placeholder source={source} />
      )}
    </div>
  );
}

export default NewsThumb;
