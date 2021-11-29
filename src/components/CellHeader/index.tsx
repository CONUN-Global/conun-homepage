import React from "react";

import styles from "./CellHeader.module.scss";

interface Props {
  children: React.ReactNode;
}

function CellHeader({ children }: Props) {
  return <div className={styles.CellHeader}>{children}</div>;
}

export default CellHeader;
