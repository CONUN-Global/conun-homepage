import React from "react";
import classNames from "classnames";

import Navbar from "../Navbar";

import useStore from "@/store/store";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  const locale = useStore((state) => state.currentLocale);

  return (
    <div className={classNames(styles.Appwrapper, styles[locale.value])}>
      <div className={styles.LayoutHeader}>
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default Layout;
