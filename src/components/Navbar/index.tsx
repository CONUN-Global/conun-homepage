import Link from "next/link";

import LanguageSelector from "./LanguageSelector";

import ConunLogo from "@/assets/icons/conun-logo.svg";

import styles from "./Navbar.module.scss";

const NAV_SECTIONS = [
  {
    id: "search",
    label: "Search",
    path: "/",
  },
  {
    id: "about",
    label: "About",
    path: "/#about",
  },
  {
    id: "products",
    label: "Products",
    path: "/#products",
  },
  {
    id: "current",
    label: "Current",
    path: "/#current",
  },
  {
    id: "get-started",
    label: "Get Started",
    path: "/#get-started",
  },
];
function Navbar() {
  return (
    <div className={styles.NavbarLayout}>
      <div className={styles.NavbarLeft}>
        <ConunLogo className={styles.ConunLogo} />
        <Link href="/">
          <a>
            <div className={styles.NetworkCircle}></div>
            <div>Main net is live</div>
          </a>
        </Link>
      </div>
      <div className={styles.Spacer}></div>
      <div className={styles.NavbarRight}>
        {NAV_SECTIONS.map((section) => {
          return (
            <Link key={section.id} href={section.path}>
              <a className={styles.Link}>{section.label}</a>
            </Link>
          );
        })}
        <LanguageSelector />
      </div>
    </div>
  );
}
export default Navbar;
