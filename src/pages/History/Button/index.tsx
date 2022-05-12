import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: (string | number)[];
  selectedYear: number;
  index: number;
  setSelectedYear: (name: number) => void;
}

function Button({ item, selectedYear, index, setSelectedYear }: ButtonProps) {
  const active = selectedYear === index ? true : false;
  return (
    <button
      className={classNames(styles.yearSelectBtn, {
        [styles.active]: active,
      })}
      onClick={() => setSelectedYear(index)}
    >
      {item[0]} - {item[1]}
    </button>
  );
}

export default Button;
