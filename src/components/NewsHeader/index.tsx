import styles from "./NewsHeader.module.scss";

interface Props {
  children: React.ReactNode;
}

function NewsHeader({ children }: Props) {
  return <div className={styles.NewsHeader}>{children}</div>;
}

export default NewsHeader;
