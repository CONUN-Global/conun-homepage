import styles from "./PaginationBar.module.scss";
import Right from "@/assets/icons/RightCaret.svg";
import Left from "@/assets/icons/LeftCaret.svg";

interface Props {
  next: () => void;
  prev: () => void;
  children: React.ReactNode;
}

function PaginationBar({ next, prev, children }: Props) {
  return (
    <div className={styles.PaginationSelect}>
      <button onClick={prev} className={styles.PaginationButton}>
        <Left />
      </button>
      {children}
      <button onClick={next} className={styles.PaginationButton}>
        <Right />
      </button>
    </div>
  );
}

export default PaginationBar;
