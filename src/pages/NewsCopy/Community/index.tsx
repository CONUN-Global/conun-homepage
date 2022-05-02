import styles from "./Community.module.scss";

import NewsHeader from "@/components/NewsHeader";
import Button from "./SocialMediaButton";
import NewsItem from "./NewsItem";

import { NewsDataObj } from "@/types/index";

import usePagination from "@/hooks/usePagination";
import data from "../newsData.json";

import { useState } from "react";
import PaginationBar from "@/components/PaginationBar";

function Community() {
  // const paginationCount = Math.ceil(data.length / 4);

  const [selectedPage, setSelectedPage] = useState(0);
  const { currentData, handleNext, handlePrev } = usePagination(
    4,
    data,
    selectedPage
  );

  ///ERASE THIS
  setSelectedPage(0);

  return (
    <div className={styles.PageContainer}>
      <div className={styles.CommunityContainer}>
        <div>
          <NewsHeader>Official Community</NewsHeader>
        </div>
        <div className={styles.BtnContainer}>
          <Button>ALL</Button>
          <Button>XANGLE</Button>
          <Button>YOUTUBE</Button>
          <Button>MEDIUM</Button>
          <Button>GITHUB</Button>
          <Button>DISCORD</Button>
        </div>
      </div>
      <div className={styles.NewsContainer}>
        {currentData.map((newsItem: NewsDataObj) => (
          <NewsItem newsData={newsItem} key={newsItem.id} />
        ))}
      </div>
      <PaginationBar next={handleNext} prev={handlePrev} />
    </div>
  );
}

export default Community;
