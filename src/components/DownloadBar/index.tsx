import { Trans } from "@lingui/macro";

import Link from "next/link";
import styles from "./DownloadBar.module.scss";

function DownloadBar() {
  return (
    <div className={styles.DownloadBar}>
      <p>
        <Trans id="Metacon, CONUN's new brower extension is now available." />
      </p>
      <Link href="https://chrome.google.com/webstore/detail/metacon/fpklpminiiiopkibkfamkglecdgfoaia?authuser=1&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNLg6EuaasCIcy616zWE-x8hv-3Vl8PEUo9v-7naXFON7CWTiimiMwRoCUUgQAvD_BwE">
        <a target="_blank" className={styles.DownloadLink} rel="noreferrer">
          Download Now
        </a>
      </Link>
    </div>
  );
}
export default DownloadBar;
