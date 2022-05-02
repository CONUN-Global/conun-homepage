import styles from "./PaginationBar.module.scss";

type Props = {
  next: () => void;
  prev: () => void;
};

function PaginationBar({ next, prev }: Props) {
  return (
    <div className={styles.PaginationSelect}>
      <button onClick={prev} className={styles.PaginationButton}>
        Previous
      </button>
      {/* {paginationCount} */}
      <button onClick={next} className={styles.PaginationButton}>
        Next
      </button>
    </div>
  );
}

export default PaginationBar;
