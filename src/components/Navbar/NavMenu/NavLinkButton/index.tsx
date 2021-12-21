import Link from "next/link";
import React from "react";

import styles from "../NavMenuCommon.module.scss";

interface Props {
  href: string;
  label: string | JSX.Element;
}

function NavLinkButton({ href, label }: Props) {
  return (
    <div className={styles.NavMenuElement}>
      <div className={styles.NavMenuCell}>
        <div className={styles.CellInner}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavLinkButton;
