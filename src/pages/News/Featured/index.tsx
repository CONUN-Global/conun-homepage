import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./Featured.module.scss";

function Featured() {
  return (
    <div className={styles.Featured}>
      <CellHeader>Featured</CellHeader>
    </div>
  );
}

export default Featured;
