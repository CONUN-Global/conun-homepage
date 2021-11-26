import { CONTENT } from "./Content";
import List from "@/components/List";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      {CONTENT.map((footer, i: number) => {
        return <List key={i} section={footer.section} items={footer.items} />;
      })}
    </div>
  );
}

export default Footer;
