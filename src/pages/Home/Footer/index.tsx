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
        <div className={styles.LineTop}>
          <p>conuncs@conun.co.kr /</p>
          <p>1 Raffles Place #44-01A One Raffles Place Singapore</p>
        </div>
        <p>ⓒ 2018 CONUN, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
