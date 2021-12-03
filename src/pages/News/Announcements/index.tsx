import React from "react";

import CellHeader from "@/components/CellHeader";
import NavButtons from "../TableNav";
import NewsCard from "@/components/NewsCard";

import usePagination from "@/hooks/usePagination";

import { NewsDataObj } from "@/types/index";

import styles from "./Announcements.module.scss";

// placeholder data until the server for this is made
import dummyData from "../newsData.json";

const data = dummyData.filter((news) => news.isAnnouncement);
const SLICE_SIZE = 4;

function Announcements() {
  const { currentData, handleNext, handlePrev } = usePagination(
    SLICE_SIZE,
    data
  );

  return (
    <div className={styles.Announcements}>
      <CellHeader>Announcements</CellHeader>
      <div className={styles.CellContainer}>
        {currentData.map((news: NewsDataObj) => (
          <div className={styles.Cell} key={news.id}>
            <NewsCard newsData={news} size="small" />
          </div>
        ))}
      </div>
      <NavButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}

export default Announcements;
