import React, { useState } from "react";
import Link from "next/link";
import { Trans } from "@lingui/macro";

import SideDrawer from "@/components/SideDrawer";
import Backdrop from "@/components/Backdrop";
import DrawerToggleButton from "@/components/SideDrawer/DrawerToggleButton";
import NavMenu from "./NavMenu";

import useDetectMobile from "@/hooks/useDetectMobile";

import ConunLogo from "@/assets/icons/conun-logo.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [SideDrawerOpen, setSideDrawer] = useState(false);
  const isMobile = useDetectMobile();

  const handleSideDrawer = () => {
    setSideDrawer((prev) => !prev);
  };

  const handleBackdrop = () => {
    setSideDrawer(false);
  };

  return (
    <div className={styles.NavbarLayout}>
      <div className={styles.NavbarContainer}>
        <div className={styles.NavbarLeft}>
          <Link href="/">
            <a>
              <ConunLogo className={styles.ConunLogo} />
            </a>
          </Link>
          <div className={styles.NetworkStatus}>
            <span className={styles.NetworkCircle}></span>
            <Link href="https://conscan.conun.io/">
              <a target="_blank" rel="noreferrer">
                <Trans id="Mainnet is live" />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.Spacer}></div>
        <div className={styles.NavbarRight}>
          {isMobile ? (
            <div className={styles.ToolbarVertical}>
              <div className={styles.Toolbar}>
                <SideDrawer open={SideDrawerOpen} />
                <DrawerToggleButton onclick={handleSideDrawer} />
              </div>
              {SideDrawerOpen && <Backdrop onclick={handleBackdrop} />}
            </div>
          ) : (
            <NavMenu />
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
