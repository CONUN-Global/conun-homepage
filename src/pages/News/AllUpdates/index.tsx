import React from "react";

import CellHeader from "@/components/CellHeader";
import SourceFilter from "./SourceFilter";

import styles from "./AllUpdates.module.scss";

import data from "../newsData.json";
import UpdateCard from "./UpdateCard";
import NavButtons from "./NavButtons";

function AllUpdates() {
  return (
    <div className={styles.AllUpdates}>
      <CellHeader>All Updates</CellHeader>
      <SourceFilter />
      <div className={styles.UpdateContainer}>
        {data.slice(0, 4).map((news) => (
          <UpdateCard key={news.id} newsData={news} />
        ))}
      </div>
      <NavButtons />
    </div>
  );
}

export default AllUpdates;
