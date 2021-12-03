import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./Information.module.scss";

import data from "../newsData.json";
import InfoCard from "./InfoCard";
import NavButtons from "../TableNav";
import usePagination from "@/hooks/usePagination";
import { NewsDataObj } from "@/types/index";

const infoData = data.filter((news) => news.isHowTo);
const SLICE_SIZE = 2;

function Information() {
  const { currentData, handleNext, handlePrev } = usePagination(
    SLICE_SIZE,
    infoData
  );

  return (
    <div className={styles.Information}>
      <CellHeader>Information</CellHeader>
      <div className={styles.InfoContainer}>
        {currentData.map((info: NewsDataObj) => (
          <InfoCard key={info.id} newsData={info} />
        ))}
      </div>
      <NavButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}

export default Information;
