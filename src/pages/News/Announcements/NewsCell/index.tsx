import { NewsDataObj } from "@/types/index";
import React from "react";

import styles from "./NewsCell.module.scss";

interface Props {
  newsData: NewsDataObj;
}

function NewsCell({ newsData }: Props) {
  return (
    <div className={styles.NewsCell}>
      <div className={styles.Title}>{newsData.title}</div>
      <div className={styles.Date}>{newsData.date}</div>
      <div className={styles.Link}>
        <span>Read more</span>
        <a href={newsData.link}>O</a>
      </div>
    </div>
  );
}

export default NewsCell;
