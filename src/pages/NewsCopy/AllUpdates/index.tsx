import React, { useState } from "react";

import CellHeader from "@/components/CellHeader";

import SourceFilter from "./SourceFilter";
import UpdateCard from "./UpdateCard";
import TableNav from "../TableNav";

import usePagination from "@/hooks/usePagination";

import { NewsDataObj, NewsSource } from "@/types/index";

import styles from "./AllUpdates.module.scss";

import data from "../newsData.json";

const SLICE_SIZE = 4;

function AllUpdates() {
  const [activeFilter, setActiveFilter] = useState<NewsSource | null>(null);

  let dataStream = data;

  if (activeFilter) {
    dataStream = data.filter((news) => news.source === activeFilter);
  }

  const { currentData, handleNext, handlePrev } = usePagination(
    SLICE_SIZE,
    dataStream
  );

  return (
    <div className={styles.AllUpdates}>
      <CellHeader>All Updates</CellHeader>
      <SourceFilter activeFilter={activeFilter} setFilter={setActiveFilter} />
      <div className={styles.UpdateContainer}>
        {currentData.map((news: NewsDataObj) => (
          <UpdateCard key={news.id} newsData={news} />
        ))}
      </div>
      <TableNav handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default AllUpdates;
