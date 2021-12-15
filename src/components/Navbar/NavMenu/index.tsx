import React from "react";

import styles from "./NavMenu.module.scss";

import { NAV_ITEMS } from "../NavbarItems";
import NavLinkButton from "./NavLinkButton";
import NavSubMenu from "./NavSubMenu";
import LanguageSelector from "@/components/LanguageSelector";
import { Trans } from "@lingui/macro";

function NavMenu() {
  return (
    <div className={styles.NavMenu}>
      <NavSubMenu label={<Trans id="Products" />} />
      {NAV_ITEMS.map((item) => (
        <NavLinkButton key={item.id} href={item.path} label={item.label} />
      ))}
      <LanguageSelector />
    </div>
  );
}

export default NavMenu;
