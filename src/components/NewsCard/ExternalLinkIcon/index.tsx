import React from "react";
import classNames from "classnames";

import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import ExternalIcon from "@/assets/icons/external.svg";

import styles from "./ExternalLinkIcon.module.scss";

function Icon({ source }: { source: string }) {
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

function ExternalLinkIcon({ source, url }: { source: string; url: string }) {
  return (
    <a href={url} className={styles.ExternalLinkIcon}>
      <Icon source={source.toLowerCase()} />
      <ExternalIcon className={styles.ExternalIcon} />
    </a>
  );
}

export default ExternalLinkIcon;
