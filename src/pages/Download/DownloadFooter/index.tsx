import { Trans } from "@lingui/macro";
import { DOWNLOADS_MENU } from "./DownloadMenu";
import Dropdown from "@/components/Dropdown";

import styles from "./DownloadFooter.module.scss";

function DownloadFooter() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <h1>Conun Product Downloads</h1>
        <p className={styles.Description}>
          <Trans id="Select your operating system to dowload CONUN Drive," />
          <br />
          <Trans id="Manager, and Manager Extension." />
        </p>
        <div className={styles.DownloadMenuContainer}>
          {DOWNLOADS_MENU.map((menu, i: number) => (
            <Dropdown key={i} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DownloadFooter;
