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
    id: "products",
    label: "Products",
    path: "/products",
  },
  {
    id: "team",
    label: "Team",
    path: "/team",
  },
  {
    id: "download",
    label: "For Developers",
    path: "/download",
  },
  {
    id: "notices",
    label: "Notices",
    path: "/notices",
  },
  {
    id: "faqs",
    label: "FAQs",
    path: "/faqs",
  },
  {
    id: "learn-more",
    label: "Learn More",
    path: "/learn-more",
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
