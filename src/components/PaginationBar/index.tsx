import styles from "./PaginationBar.module.scss";
import Right from "@/assets/icons/RightCaret.svg";
import Left from "@/assets/icons/LeftCaret.svg";
import { SetStateAction } from "react";

import PaginationButton from "@/components/PaginationBar/PaginationButton";

interface Props {
  next: () => void;
  prev: () => void;
  pages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

function PaginationBar({
  next,
  prev,
  pages,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <div className={styles.PaginationSelect}>
      <button onClick={prev} className={styles.PaginationButton}>
        <Left />
      </button>

      {pages.map((item, index) => {
        const active = index === currentPage ? true : false;

        return (
          <PaginationButton
            active={active}
            key={index}
            index={index}
            setCurrentPage={setCurrentPage}
          />
        );
      })}
      <button onClick={next} className={styles.PaginationButton}>
        <Right />
      </button>
    </div>
  );
}

export default PaginationBar;
