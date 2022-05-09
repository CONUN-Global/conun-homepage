import styles from "./Community.module.scss";

import { NewsDataObj } from "@/types/index";

import usePagination from "@/hooks/usePagination";

import NewsHeader from "@/components/NewsHeader";
import NewsItem from "./NewsItem";
import PaginationBar from "@/components/PaginationBar";
import NoResultCard from "../NewsSearchable/NoResultCard";
import Button from "./SocialMediaButton";

import buttons from "./SocialMediaButton/socialmediabuttons.json";

function Community({
  localdata = [],
  searchTerm,
  socialMediaFilter,
  setSocialMediaFilter,
}: any) {
  const sliceSize = 4;
  const pages = [];
  for (let i = 0; i < Math.ceil(localdata.length / sliceSize); i++) {
    pages.push(i);
  }

  const { currentData, handleNext, handlePrev, currentPage, setCurrentPage } =
    usePagination(sliceSize, localdata, 0);

  return (
    <div className={styles.PageContainer}>
      <div className={styles.CommunityContainer}>
        <div>
          <NewsHeader>Official Community</NewsHeader>
        </div>
        <div className={styles.BtnContainer}>
          {buttons.map((btn: any) => (
            <Button
              key={btn.value}
              value={btn.value}
              socialMediaFilter={socialMediaFilter}
              setSocialMediaFilter={setSocialMediaFilter}
            >
              {btn.name}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.NewsContainer}>
        {searchTerm.length > 1 ? (
          <div
            className={styles.Results}
          >{`Showing results for '${searchTerm}'`}</div>
        ) : null}
        {currentData.length > 0 ? (
          currentData.map((newsItem: NewsDataObj) => (
            <NewsItem newsData={newsItem} key={newsItem.id} />
          ))
        ) : (
          <NoResultCard />
        )}
      </div>
      {localdata.length > sliceSize && (
        <PaginationBar
          next={handleNext}
          prev={handlePrev}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Community;