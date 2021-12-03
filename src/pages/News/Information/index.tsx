import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./Information.module.scss";

import data from "../newsData.json";
import InfoCard from "./InfoCard";

const infoData = data.filter((news) => news.isHowTo).slice(0, 2);

function Information() {
  return (
    <div className={styles.Information}>
      <CellHeader>Information</CellHeader>
      <div className={styles.InfoContainer}>
        {infoData.map((info) => (
          <InfoCard key={info.id} newsData={info} />
        ))}
      </div>
    </div>
  );
}

export default Information;
