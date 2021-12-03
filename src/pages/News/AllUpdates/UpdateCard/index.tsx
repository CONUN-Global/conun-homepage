import React from "react";
import NewsCard from "@/components/NewsCard";
import NewsThumb from "@/components/NewsThumb";

import { NewsDataObj } from "@/types/index";

import styles from "./UpdateCard.module.scss";

function UpdateCard({ newsData }: { newsData: NewsDataObj }) {
  return (
    <div className={styles.UpdateCard}>
      <NewsThumb source={newsData.source} thumbUrl={newsData.thumbnail} />
      <NewsCard newsData={newsData} size="large" />
    </div>
  );
}

export default UpdateCard;
