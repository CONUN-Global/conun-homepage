import React from "react";

import Navbar from "../Navbar";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  return (
    <div className={styles.Appwrapper}>
      <div className={styles.LayoutHeader}>
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default Layout;
