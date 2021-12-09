import { Trans } from "@lingui/macro";

import Link from "next/link";
import styles from "./DownloadBar.module.scss";

function DownloadBar() {
  return (
    <div className={styles.DownloadBar}>
      <p>
        <Trans id="Version 1.2.1 of CONUN Drive is now available." />
      </p>
      <Link href="https://dappstore.conun.io/">
        <a target="_blank" className={styles.DownloadLink} rel="noreferrer">
          Download Now
        </a>
      </Link>
    </div>
  );
}
export default DownloadBar;
