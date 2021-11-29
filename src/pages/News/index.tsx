import React from "react";

import NewsHead from "./NewsHead";

import styles from "./News.module.scss";

function News() {
  return (
    <div className={styles.News}>
      <NewsHead />
    </div>
  );
}

export default News;
