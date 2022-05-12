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
      onClick={(event: any) => setSocialMediaFilter(event.target?.value)}
    >
      {children}
    </button>
  );
}

export default button;
