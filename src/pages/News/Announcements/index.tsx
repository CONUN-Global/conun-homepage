import React from "react";

import CellHeader from "@/components/CellHeader";

import styles from "./Announcements.module.scss";

function Announcements() {
  return (
    <div className={styles.Announcements}>
      <CellHeader>Announcements</CellHeader>
    </div>
  );
}

export default Announcements;
