import React from "react";
import Link from "next/link";
import { Trans } from "@lingui/macro";

import styles from "./WhitePaperCard.module.scss";

function WhitePaperCard() {
  return (
    <div className={styles.WhitePaperCard}>
      <div className={styles.TextContainer}>
        <h3 className={styles.Title}>
          <Trans id="Whitepaper" />
        </h3>
        <p className={styles.Description}>
          <Trans id="To know more about Conun's business, download Conun's white paper." />
        </p>
      </div>
      <div className={styles.DropdownContainer}>
        <Link href="./assets/technology_whitepaper/ko.pdf">
          <a target="_blank" rel="noreferrer" className={styles.DownloadButton}>
            <Trans id="PDF Download" />
          </a>
        </Link>
      </div>
    </div>
  );
}
export default WhitePaperCard;
