import NewsHeader from "@/components/NewsHeader";
import styles from "./Press.module.scss";

import { Article } from "@/types/index";
import usePagination from "@/hooks/usePagination";

import PaginationBar from "@/components/PaginationBar";

import PressItem from "./PressItem";

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
  const { currentData, handleNext, handlePrev } = usePagination(
    4,
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
      <PaginationBar next={handleNext} prev={handlePrev} />
    </div>
  );
}

export default Press;
