import React from "react";

import Navbar from "../Navbar";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  return (
    <div className={styles.Appwrapper}>
      <div className={styles.Layout}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
