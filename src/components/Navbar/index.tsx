import React, { useState } from "react";
import Link from "next/link";

import LanguageSelector from "./LanguageSelector";
import { NAV_ITEMS } from "@/components/Navbar/NavbarItems";
import SideDrawer from "@/components/SideDrawer";
import Backdrop from "@/components/Backdrop";
import DrawerToggleButton from "@/components/SideDrawer/DrawerToggleButton";

import useDetactMobile from "@/hooks/useDetactMobile";

import ConunLogo from "@/assets/icons/conun-logo.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [SideDrawerOpen, setSideDrawer] = useState(false);
  const isMobile = useDetactMobile();

  const handleSideDrawer = () => {
    setSideDrawer((prev) => !prev);
  };

  const handleDropdown = () => {
    setSideDrawer(false);
  };
  return (
    <div className={styles.NavbarLayout}>
      <div className={styles.NavbarLeft}>
        <Link href="/">
          <a>
            <ConunLogo className={styles.ConunLogo} />
          </a>
        </Link>
        <div className={styles.NetworkCircle}></div>
        <div>Mainnet is live</div>
      </div>
      <div className={styles.Spacer}></div>
      <div className={styles.NavbarRight}>
        {isMobile ? (
          <div className={styles.ToolbarVertical}>
            <div className={styles.Toolbar}>
              <SideDrawer open={SideDrawerOpen} />
              <DrawerToggleButton onclick={handleSideDrawer} />
            </div>
            {SideDrawerOpen && <Backdrop onclick={handleDropdown} />}
          </div>
        ) : (
          <div className={styles.ToolbarHorizontal}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} href={item.path}>
                <a className={styles.Link}>{item.label}</a>
              </Link>
            ))}
            <LanguageSelector />
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
