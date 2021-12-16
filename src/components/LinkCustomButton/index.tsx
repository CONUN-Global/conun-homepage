import Link from "next/link";

import styles from "./LinkCustomButton.module.scss";

interface Props {
  linkText: React.ReactNode;
  path: string;
}
function LinkCustomButton({ linkText, path }: Props) {
  return (
    <Link href={path}>
      <a className={styles.LinkButton} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </Link>
  );
}
export default LinkCustomButton;
