import { Trans } from "@lingui/macro";
import { DOWNLOADS_MENU } from "./DownloadMenu";
import Dropdown from "@/components/Dropdown";

import styles from "./DownloadFooter.module.scss";

function DownloadFooter() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <h1>
          <Trans id="Conun Product Downloads" />
        </h1>
        <div className={styles.Description}>
          <p>
            <Trans id="Select your operating system to dowload CONUN Drive," />
          </p>
          <p>
            <Trans id="Manager, and Manager Extension." />
          </p>
        </div>
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
