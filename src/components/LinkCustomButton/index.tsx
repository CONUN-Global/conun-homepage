import { Trans } from "@lingui/macro";
import Link from "next/link";

import styles from "./LinkCustomButton.module.scss";

interface Props {
  linkText: string;
}
function LinkCustomButton({ linkText }: Props) {
  return (
    <Link href="/">
      <a className={styles.LinkButton} rel="noreferrer">
        <Trans id={linkText} />
      </a>
    </Link>
  );
}
export default LinkCustomButton;
