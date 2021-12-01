import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import LanguageSelector from "../LanguageSelector";

import { NAV_ITEMS, NAV_PRODUCTS } from "@/components/Navbar/NavbarItems";
import SideDrawer from "@/components/SideDrawer";
import Backdrop from "@/components/Backdrop";
import DrawerToggleButton from "@/components/SideDrawer/DrawerToggleButton";

import useDetectMobile from "@/hooks/useDetectMobile";

import ConunLogo from "@/assets/icons/conun-logo.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [SideDrawerOpen, setSideDrawer] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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
            <p>Mainnet is live</p>
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
            <div className={styles.ToolbarHorizontal}>
              <div className={styles.NavProducts}>
                <div
                  onMouseEnter={() => setDropdownOpen((prev) => !prev)}
                  className={styles.ProductsTab}
                >
                  Products
                </div>
                <div
                  className={classNames(styles.ProductsItems, {
                    [styles.displayItems]: isDropdownOpen,
                  })}
                >
                  {NAV_PRODUCTS.map((item) => {
                    return (
                      <Link key={item.id} href={item.path}>
                        <a className={styles.ProductsItem}>{item.label}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className={styles.NavItems}>
                {NAV_ITEMS.map((item) => {
                  return (
                    <Link key={item.id} href={item.path}>
                      <a className={styles.Item}>{item.label}</a>
                    </Link>
                  );
                })}
              </div>
              <LanguageSelector />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
