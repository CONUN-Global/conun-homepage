import { CONTENT } from "./Content";

import List from "@/components/List";
import Button from "@/components/Button";

import ArrowUp from "@/assets/icons/arrow_up.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Button
        className={styles.Arrow}
        noStyle
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </Button>

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
        <p>ⓒ 2021 CONUN, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
