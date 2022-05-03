import NewsHeader from "@/components/NewsHeader";
import styles from "./Press.module.scss";

import { Article } from "@/types/index";
import usePagination from "@/hooks/usePagination";

import PaginationBar from "@/components/PaginationBar";

import PressItem from "./PressItem";
import PaginationButton from "@/components/PaginationBar/PaginationButton";

export type Props = {
  data: {
    display: number;
    items: Article[];
    lastBuildData: string;
    start: number;
    total: number;
  };
};

function Press({ data }: Props) {
  const sliceSize = 4;
  const buttonCount = Math.ceil(data.items.length / sliceSize);

  const { currentData, handleNext, handlePrev, setCurrentPage } = usePagination(
    sliceSize,
    data.items,
    0
  );

  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <NewsHeader>Press publicity</NewsHeader>
      </div>
      {currentData.map((article, index) => (
        <PressItem key={index} article={article} />
      ))}
      <PaginationBar next={handleNext} prev={handlePrev}>
        {Array.from(Array(buttonCount).keys()).map((item, index) => {
          return (
            <PaginationButton
              key={index}
              index={index}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      </PaginationBar>
    </div>
  );
}

export default Press;
