import React from "react";

import CellHeader from "@/components/CellHeader";
import NavButtons from "./TableNav";

import { NewsDataObj } from "@/types/index";

import styles from "./Announcements.module.scss";

// placeholder data until the server for this is made
import dummyData from "../newsData.json";
import NewsCard from "@/components/NewsCard";

const data = dummyData.filter((news) => news.isAnnouncement);

const announcementData = data.slice(0, 4);

function Announcements() {
  return (
    <div className={styles.Announcements}>
      <CellHeader>Announcements</CellHeader>
      <div className={styles.CellContainer}>
        {announcementData.map((news: NewsDataObj) => (
          <div className={styles.Cell} key={news.id}>
            <NewsCard newsData={news} size="small" />
          </div>
        ))}
      </div>
      <NavButtons />
    </div>
  );
}

export default Announcements;
