import Link from "next/link";
import styles from "./About.module.scss";

function About() {
  return (
    <section id="about" className={styles.About}>
      <div className={styles.AboutLeftContainer}>
        <div>Creating</div>
        <div className={styles.MainTitle}>Blockchain Based</div>
        <div>Solutions</div>
      </div>
      <div className={styles.AboutRightContainer}>
        <h2 className={styles.Title}>About Conun</h2>
        <div className={styles.Description}>
          CONUN is a blockchain-based distributed supercomputing platform. It is
          a service platform that allows the processing of high-performance
          computing resources by sharing the idle resources of the
          participants`&apos; personal computers and smartphones .
        </div>
        <div className={styles.ButtonContainer}>
          <Link href={"./assets/whitepaper/en.pdf"}>
            <a
              target="_blank"
              className={styles.WhitepaperLink}
              rel="noreferrer"
            >
              See Whitepaper
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default About;
