import React from "react";

import CellHeader from "@/components/CellHeader";
import NavButtons from "./TableNav";

import { NewsDataObj } from "@/types/index";

import styles from "./Announcements.module.scss";

// placeholder data until the server for this is made
import dummyData from "../newsData.json";
import NewsCard from "@/components/NewsCard";

const data = dummyData.slice(0, 4);

function Announcements() {
  return (
    <div className={styles.Announcements}>
      <CellHeader>Announcements</CellHeader>
      {data.slice(0, 5).map((news: NewsDataObj) => (
        <div className={styles.Cell} key={news.id}>
          <NewsCard newsData={news} size="small" />
        </div>
      ))}
      <NavButtons />
    </div>
  );
}

export default Announcements;
