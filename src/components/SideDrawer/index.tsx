import Link from "next/link";
import classNames from "classnames";

import LanguageSelector from "../LanguageSelector";

import { NAV_ITEMS, NAV_PRODUCTS } from "@/components/Navbar/NavbarItems";
import styles from "./SideDrawer.module.scss";

function SideDrawer({ ...props }) {
  let { open } = props;

  return (
    <div className={classNames(styles.SideDrawer, { [styles.open]: open })}>
      <ul className={styles.SideDrawerList}>
        <div className={styles.LinkContainer}>Products</div>
        <div className={styles.ProductItems}>
          {NAV_PRODUCTS.map((item) => {
            return (
              <Link key={item.id} href={item.path}>
                <a className={styles.Item}>{item.label}</a>
              </Link>
            );
          })}
        </div>

        {NAV_ITEMS.map((item) => (
          <div key={item.id} className={styles.LinkContainer}>
            <Link href={item.path}>
              <a className={styles.Link}>{item.label}</a>
            </Link>
          </div>
        ))}

        <LanguageSelector sideNav={true} />
      </ul>
    </div>
  );
}
export default SideDrawer;
