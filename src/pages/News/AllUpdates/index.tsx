import React, { useState } from "react";

import CellHeader from "@/components/CellHeader";

import SourceFilter from "./SourceFilter";
import UpdateCard from "./UpdateCard";
import NavButtons from "./NavButtons";

import { NewsSource } from "@/types/index";

import styles from "./AllUpdates.module.scss";

import data from "../newsData.json";

function AllUpdates() {
  const [activeFilter, setActiveFilter] = useState<NewsSource | null>(null);

  let dataStream = data;

  if (activeFilter) {
    dataStream = data.filter((news) => news.source === activeFilter);
  }

  return (
    <div className={styles.AllUpdates}>
      <CellHeader>All Updates</CellHeader>
      <SourceFilter activeFilter={activeFilter} setFilter={setActiveFilter} />
      <div className={styles.UpdateContainer}>
        {dataStream.slice(0, 4).map((news) => (
          <UpdateCard key={news.id} newsData={news} />
        ))}
      </div>
      <NavButtons />
    </div>
  );
}

export default AllUpdates;
