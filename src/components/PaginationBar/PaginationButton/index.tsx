import classNames from "classnames";
import styles from "./PaginationButton.module.scss";

interface Props {
  active: boolean;
  setCurrentPage: (argument: number) => void;
  index: number;
}

function PaginationButton({ setCurrentPage, active, index }: Props) {
  return (
    <button
      className={classNames(styles.PaginationButton, {
        [styles.active]: active,
      })}
      onClick={() => setCurrentPage(index)}
    >
      {index + 1}
    </button>
  );
}

export default PaginationButton;
