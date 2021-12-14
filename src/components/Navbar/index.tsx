import React, { useState } from "react";
import Link from "next/link";
import { Trans } from "@lingui/macro";
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
            <Link href="https://conscan.conun.io/">
              <a target="_blank" rel="noreferrer">
                <Trans id="Mainnet is online" />
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
            <div className={styles.ToolbarHorizontal}>
              <div
                className={styles.NavProducts}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  className={styles.ProductsTab}
                >
                  <Trans id="Products" />
                </div>
                <div
                  className={classNames(styles.ProductsItems, {
                    [styles.displayItems]: isDropdownOpen,
                  })}
                >
                  {NAV_PRODUCTS.map((item) => {
                    return (
                      <div key={item.id} className={styles.ProductsItem}>
                        <Link href={item.path}>
                          <a className={styles.ItemTitle}>{item.label}</a>
                        </Link>
                        <p className={styles.ItemDescription}>
                          {item.description}
                        </p>
                      </div>
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
