import styles from "./PaginationBar.module.scss";

interface Props {
  next: () => void;
  prev: () => void;
  children: React.ReactNode;
}

function PaginationBar({ next, prev, children }: Props) {
  return (
    <div className={styles.PaginationSelect}>
      <button onClick={prev} className={styles.PaginationButton}>
        Previous
      </button>
      {children}
      <button onClick={next} className={styles.PaginationButton}>
        Next
      </button>
    </div>
  );
}

export default PaginationBar;
