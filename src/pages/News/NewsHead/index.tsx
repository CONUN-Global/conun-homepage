import Socials from "@/components/Socials";
import ConunLogo from "@/assets/icons/conun-logo.svg";

import styles from "./NewsHead.module.scss";

function NewsHead() {
  return (
    <>
      <div className={styles.LogoBox}>
        <ConunLogo className={styles.ConunLogo} />
      </div>
      <div className={styles.Social}>
        <Socials className={styles.SocialLinks} alignment="horizontal" />
      </div>
      <div className={styles.Date}>
        <span>{new Date().toDateString()}</span>
      </div>
    </>
  );
}

export default NewsHead;
