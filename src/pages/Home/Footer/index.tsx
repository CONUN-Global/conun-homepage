import { CONTENT } from "./Content";
import Link from "next/link";
import List from "@/components/List";

import ArrowUp from "@/assets/icons/arrow_up.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Link href="/">
        <a className={styles.Arrow}>
          <ArrowUp />
        </a>
      </Link>

      <div className={styles.LinkSection}>
        {CONTENT.map((footer, i: number) => {
          return <List key={i} section={footer.section} items={footer.items} />;
        })}
      </div>
      <div className={styles.CopyRightLine}>
        <div className={styles.Left}>
          <span className={styles.CopyRight}>2021CONUN</span>
          <span>Connecting on Universal Networks</span>
        </div>
        <div className={styles.Right}>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
