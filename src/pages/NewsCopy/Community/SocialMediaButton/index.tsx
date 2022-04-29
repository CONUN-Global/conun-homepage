import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function button({ children }: ButtonProps) {
  return <button className={styles.Button}>{children}</button>;
}

export default button;
