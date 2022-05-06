import styles from "./Press.module.scss";
import usePagination from "@/hooks/usePagination";

import PaginationBar from "@/components/PaginationBar";

import PressItem from "./PressItem";
import NoResultCard from "../NewsSearchable/NoResultCard";

interface Props {
  APIdata: {
    description: string;
    link: string;
    originallink: string;
    pubDate: string;
    title: string;
  }[];
  searchTerm: string;
}

function Press({ APIdata, searchTerm }: Props) {
  const sliceSize = 4;

  //Get page count
  const pages = [];
  for (let i = 0; i < Math.ceil(APIdata.length / sliceSize); i++) pages.push(i);

  const { currentData, handleNext, handlePrev, currentPage, setCurrentPage } =
    usePagination(sliceSize, APIdata, 0);

  return (
    <div className={styles.Container}>
      {searchTerm.length > 1 ? (
        <div
          className={styles.Results}
        >{`Showing results for '${searchTerm}'`}</div>
      ) : null}
      {currentData.length > 0 ? (
        currentData.map((article, index) => (
          <PressItem key={index} article={article} />
        ))
      ) : (
        <NoResultCard />
      )}
      {APIdata.length > sliceSize && (
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

export default Press;
