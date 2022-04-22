import React from "react";

import NewsThumb from "@/components/NewsThumb";

import { NewsDataObj } from "@/types/index";

import styles from "./InfoCard.module.scss";

function InfoCard({ newsData }: { newsData: NewsDataObj }) {
  return (
    <div className={styles.InfoCard}>
      <div className={styles.ThumbBox}>
        <NewsThumb newsData={newsData} />
      </div>
      <div className={styles.Title}>{newsData.title}</div>
      {/* <div className={styles.Read}>Read More</div> */}
    </div>
  );
}

export default InfoCard;
