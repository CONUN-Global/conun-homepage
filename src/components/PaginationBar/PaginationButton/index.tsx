import styles from "./PaginationButton.module.scss";

interface Props {
  setCurrentPage: (argument: number) => void;
  index: number;
}

function PaginationButton({ setCurrentPage, index }: Props) {
  return (
    <button
      className={styles.PaginationButton}
      onClick={() => setCurrentPage(index)}
    >
      {index + 1}
    </button>
  );
}

export default PaginationButton;
