import styles from "./Community.module.scss";

import NewsHeader from "@/components/NewsHeader";
// import Button from "./SocialMediaButton";
import NewsItem from "./NewsItem";

import { NewsDataObj } from "@/types/index";

import usePagination from "@/hooks/usePagination";
import data from "../newsData.json";

import PaginationBar from "@/components/PaginationBar";
// import PaginationButton from "@/components/PaginationBar/PaginationButton";

function Community() {
  const sliceSize = 4;
  // const buttonCount = Math.ceil(data.length / sliceSize);

  const { currentData, handleNext, handlePrev } = usePagination(
    sliceSize,
    data,
    0
  );

  return (
    <div className={styles.PageContainer}>
      <div className={styles.CommunityContainer}>
        <div>
          <NewsHeader>Official Community</NewsHeader>
        </div>
        {/* <div className={styles.BtnContainer}>
          <Button>ALL</Button>
          <Button>XANGLE</Button>
          <Button>YOUTUBE</Button>
          <Button>MEDIUM</Button>
          <Button>GITHUB</Button>
          <Button>DISCORD</Button>
        </div> */}
      </div>
      <div className={styles.NewsContainer}>
        {currentData.map((newsItem: NewsDataObj) => (
          <NewsItem newsData={newsItem} key={newsItem.id} />
        ))}
      </div>
      <PaginationBar next={handleNext} prev={handlePrev}>
        {/* CREATES ARRAY THE SIZE OF BUTTON COUNT UNDER CONsTRUCTION*/}
        {/* {Array.from(Array(buttonCount).keys()).map((item, index) => {
          return (
            <PaginationButton
              key={index}
              index={index}
              setCurrentPage={setCurrentPage}
            />
          );
        })} */}
      </PaginationBar>
    </div>
  );
}

export default Community;
