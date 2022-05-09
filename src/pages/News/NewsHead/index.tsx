import Socials from "@/components/Socials";

import styles from "./NewsHead.module.scss";

function NewsHead() {
  return (
    <div className={styles.HeadlineContainer}>
      <div className={styles.HeadlineBox}>
        <h1>NEWS</h1>
        <div className={styles.SocialSearch}>
          <Socials className={styles.SocialLinks} alignment="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default NewsHead;
