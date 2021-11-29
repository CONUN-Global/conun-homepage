import classNames from "classnames";
import Youtube from "@/assets/socials/youtube.svg";
import Facebook from "@/assets/socials/facebook.svg";
import Linkedin from "@/assets/socials/linkedin.svg";
import Github from "@/assets/socials/github.svg";
import Discord from "@/assets/socials/discord.svg";
import Medium from "@/assets/socials/medium.svg";

import styles from "./Socials.module.scss";

type Align = "vertical" | "horizontal";

interface Props {
  className?: string;
  alignment?: Align;
}

function Socials({ className, alignment = "vertical" }: Props) {
  return (
    <div
      className={classNames(styles.SocialIcons, styles[alignment], className)}
    >
      <Youtube className={styles.SocialIcon} />
      <Facebook className={styles.SocialIcon} />
      <Linkedin className={styles.SocialIcon} />
      <Github className={styles.SocialIcon} />
      <Discord className={styles.SocialIcon} />
      <Medium className={styles.SocialIcon} />
    </div>
  );
}
export default Socials;
