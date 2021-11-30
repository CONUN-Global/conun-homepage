import React from "react";

import CellHeader from "@/components/CellHeader";
import NewsCell from "./NewsCell";
import NavButtons from "./TableNav";

import { NewsDataObj } from "@/types/index";

import styles from "./Announcements.module.scss";

// placeholder data until the server for this is made
import dummyData from "./announcementsdata.json";

const data = dummyData.slice(0, 4);

function Announcements() {
  return (
    <div className={styles.Announcements}>
      <CellHeader>Announcements</CellHeader>
      {data.slice(0, 5).map((news: NewsDataObj) => (
        <NewsCell key={news.id} newsData={news} />
      ))}
      <NavButtons />
    </div>
  );
}

export default Announcements;
