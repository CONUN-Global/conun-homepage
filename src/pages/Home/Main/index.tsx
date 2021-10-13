import Link from "next/link";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Main}>
      <h1 className={styles.Title}>
        Explore, Share, and Earn with CONUN Drive
      </h1>
      <p className={styles.Description}>
        Based on desktop grid computing technology, CONUN&apos;s Distributed
        Super Computing Platform operates by agreement between participants and
        users creating a horizontal revenue ecosystem. CONUN collects world PC
        resources: CPU, GPU, and storage to share amongst network participants.
      </p>
      <Link href="/#about">
        <a className={styles.LearnMoreButton}>Learn More</a>
      </Link>
    </div>
  );
}
export default Main;
