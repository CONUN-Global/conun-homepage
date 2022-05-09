import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
  socialMediaFilter: string;
  setSocialMediaFilter: (name: string) => void;
}

function button({
  children,
  value,
  socialMediaFilter,
  setSocialMediaFilter,
}: ButtonProps) {
  const active = socialMediaFilter === value ? true : false;
  return (
    <button
      className={classNames(styles.Button, { [styles.active]: active })}
      value={value}
      onClick={(e) => setSocialMediaFilter(e.target?.value)}
    >
      {children}
    </button>
  );
}

export default button;

{
  /* <button
      className={classNames(styles.PaginationButton, {
        [styles.active]: active,
      })}
      onClick={() => setCurrentPage(index)}
    ></button> */
}
