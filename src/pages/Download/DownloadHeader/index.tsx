import { MAIN_PAGES } from "../../Home/Main/SlideMain/SlideContent";

import Horizontal from "@/components/Card/Horizontal";
import Caption from "@/components/Caption";
import Socials from "@/components/Card/Horizontal/Socials";
import Button from "@/components/Button";
import DownloadBar from "@/components/DownloadBar";

import styles from "./DownloadHeader.module.scss";

function DownloadHeader() {
  return (
    <div className={styles.DownloadContainer}>
      <Socials className={styles.SocialIcons} />
      <Horizontal className={styles.HorizontalCard}>
        <div className={styles.TextContainer}>
          <Caption color="blue" textSize="medium" title={MAIN_PAGES[3].title} />
          <p className={styles.Description}>{MAIN_PAGES[3].description}</p>
          <div className={styles.DownloadButtonContainer}>
            <h3 className={styles.SubTitle}>Web Products</h3>
            <Button className={styles.Button} variant="secondary" round>
              CONUN Metacon
            </Button>
          </div>
          <div className={styles.DownloadButtonContainer}>
            <h3 className={styles.SubTitle}>Desktop Products</h3>
            <div className={styles.ButtonContainer}>
              <Button className={styles.Button} round>
                CONUN Drive
              </Button>
              <Button className={styles.Button} round>
                CONUN Manager
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.ImageContainer}>{MAIN_PAGES[3].image}</div>
      </Horizontal>
      <DownloadBar />
    </div>
  );
}

export default DownloadHeader;
