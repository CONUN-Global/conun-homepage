import Link from "next/link";

import { MAIN_PAGES } from "../../Home/Main/SlideMain/SlideContent";

import Horizontal from "@/components/Card/Horizontal";
import Caption from "@/components/Caption";
import Socials from "@/components/Socials";
import DownloadBar from "@/components/DownloadBar";

import styles from "./DownloadHeader.module.scss";

function DownloadHeader() {
  const downloadData = MAIN_PAGES[4];

  return (
    <div className={styles.Download}>
      <div className={styles.DownloadContainer}>
        <Socials className={styles.SocialIcons} />

        <Horizontal className={styles.HorizontalCard}>
          <div className={styles.TextContainer}>
            <Caption
              className={styles.Caption}
              titleColor="blue"
              textSize="medium"
              title={downloadData.title}
            />
            <p className={styles.Description}>{downloadData.description}</p>
            <div className={styles.DownloadButtonContainer}>
              <h3 className={styles.SubTitle}>Web Products</h3>
              <Link href="https://chrome.google.com/webstore/detail/metacon/fpklpminiiiopkibkfamkglecdgfoaia?authuser=1&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNLg6EuaasCIcy616zWE-x8hv-3Vl8PEUo9v-7naXFON7CWTiimiMwRoCUUgQAvD_BwE">
                <a
                  className={styles.MetaconButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  CONUN Metacon
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.ImageContainer}>{downloadData.image}</div>
        </Horizontal>
      </div>

      <DownloadBar />
    </div>
  );
}

export default DownloadHeader;
