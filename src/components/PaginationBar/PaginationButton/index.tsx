import styles from "./PaginationButton.module.scss";

function PaginationButton({ setCurrentPage, index }: any) {
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
