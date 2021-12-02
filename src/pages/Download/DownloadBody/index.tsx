import classNames from "classnames";

import { DOWNLOAD_CONTENT } from "./DownloadContent";

import Horizontal from "@/components/Card/Horizontal";
import Caption from "@/components/Caption";

import styles from "./DownloadBody.module.scss";

function DownloadBody() {
  return (
    <div className={styles.DownloadBody}>
      {DOWNLOAD_CONTENT.map((card, index: number) => {
        return (
          <Horizontal
            key={index}
            className={classNames(styles.HorizontalCard, {
              [styles.reversed]: index === 1,
            })}
          >
            <div className={styles.TextContainer}>
              <Caption
                className={styles.Caption}
                headColor="green"
                header={card.header}
                title={card.title}
              />
              <p className={styles.Description}>{card.description}</p>
            </div>
            <div className={styles.ImageContainer}>{card.image}</div>
          </Horizontal>
        );
      })}
    </div>
  );
}
export default DownloadBody;
