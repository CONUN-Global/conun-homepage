import { Trans } from "@lingui/macro";

import Link from "next/link";
import styles from "./DownloadBar.module.scss";

const link = "./assets/KYC_verification_guide.pdf";

function DownloadBar() {
  return (
    <div className={styles.DownloadBar}>
      <p>
        <Trans id="IMPORTANT! CON Token withdrawal verification guide" />
      </p>
      <Link href={link}>
        <a target="_blank" className={styles.DownloadLink} rel="noreferrer">
          Find It Here!
        </a>
      </Link>
    </div>
  );
}
export default DownloadBar;
