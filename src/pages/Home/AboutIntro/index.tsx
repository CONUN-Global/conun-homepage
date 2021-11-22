import Link from "next/link";

import BlocksLeft from "@/assets/icons/blocks_left.svg";
import BlocksRight from "@/assets/icons/blocks_right.svg";
import styles from "./About.module.scss";

function AboutIntro() {
  return (
    <div className={styles.AboutPage}>
      <BlocksLeft className={styles.LeftBlocks} />
      <BlocksRight className={styles.RightBlocks} />
      <div id="about" className={styles.AboutIntroSection}>
        <div className={styles.AboutLeftContainer}>
          <p className={styles.SubTitle}>Creating</p>
          <h1 className={styles.MainTitle}>
            Blockchain <br />
            Based
          </h1>
          <p className={styles.SubTitle}>Solutions</p>
        </div>
        <div className={styles.AboutRightContainer}>
          <h2 className={styles.Title}>About Conun</h2>
          <div className={styles.Description}>
            CONUN is a blockchain-based distributed supercomputing platform. It
            is a service platform that allows the processing of high-performance
            computing resources by sharing the idle resources of the
            participants`&apos; personal computers and smartphones .
          </div>
          <div className={styles.ButtonContainer}>
            <Link href="/whitepaper">
              <a className={styles.WhitepaperLink} rel="noreferrer">
                See Whitepaper
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutIntro;