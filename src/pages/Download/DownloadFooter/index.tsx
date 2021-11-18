import { DOWNLOADS_MENU } from "./DownloadMenu";
import Dropdown from "@/components/Dropdown";

import styles from "./DownloadFooter.module.scss";

function DownloadFooter() {
  return (
    <div className={styles.Footer}>
      <h1>Conun Product Downloads</h1>
      <p className={styles.Description}>
        Select your operating system to dowload CONUN Drive, <br />
        Manager, and Manager Extension.
      </p>
      <div className={styles.DownloadMenuContainer}>
        {DOWNLOADS_MENU.map((menu, i: number) => (
          <Dropdown key={i} menu={menu} />
        ))}
      </div>
    </div>
  );
}
export default DownloadFooter;
