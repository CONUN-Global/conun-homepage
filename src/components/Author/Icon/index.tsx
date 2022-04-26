import DiscordIcon from "@/assets/icons/discord.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import GithubIcon from "@/assets/icons/github.svg";
import XangleIcon from "@/assets/icons/xangle.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import ConunIcon from "@/assets/icons/conun-logo.svg";

import styles from "./Icon.module.scss";

function Icon({ source }: { source: string }) {
  switch (source) {
    case "youtube":
      return <YoutubeIcon className={styles.Icon} />;
    case "discord":
      return <DiscordIcon className={styles.Icon} />;
    case "github":
      return <GithubIcon className={styles.Icon} />;
    case "xangle":
      return <XangleIcon className={styles.Icon} />;
    case "medium":
      return <MediumIcon className={styles.Icon} />;
    default:
      return <ConunIcon className={styles.Icon} />;
  }
}

export default Icon;
