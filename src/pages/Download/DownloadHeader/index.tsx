import { MAIN_PAGES } from "../../Home/Main/SlideMain/SlideContent";
import Socials from "@/components/Card/Horizontal/Socials";
import Button from "@/components/Button";
import DownloadBar from "@/components/DownloadBar";

import styles from "./DownloadHeader.module.scss";

function DownloadHeader() {
  return (
    <div className={styles.DownloadContainer}>
      <div className={styles.BuildingIcon}>{MAIN_PAGES[3].image}</div>
      <div className={styles.TextContainer}>
        <Socials />
        <div className={styles.Text}>
          <h3 className={styles.Title}>{MAIN_PAGES[3].title}</h3>
          <p className={styles.Description}>{MAIN_PAGES[3].description}</p>
          <div className={styles.DownloadButtonContainer}>
            <h3 className={styles.SubTitle}>Web Products</h3>
            <Button variant="primary" round>
              CONUN Metacon
            </Button>
          </div>
          <div className={styles.DownloadButtonContainer}>
            <h3 className={styles.SubTitle}>Desktop Products</h3>
            <div>
              <Button margin round>
                CONUN Metacon
              </Button>
              <Button round>CONUN Metacon</Button>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar />
    </div>
  );
}

export default DownloadHeader;
