import Link from "next/link";
import classNames from "classnames";
import { NAV_ITEMS } from "@/components/Navbar/NavbarItems";
import styles from "./SideDrawer.module.scss";

function SideDrawer({ ...props }) {
  let { open } = props;

  return (
    <div className={classNames(styles.SideDrawer, { [styles.open]: open })}>
      <ul className={styles.SideDrawerList}>
        {NAV_ITEMS.map((item) => (
          <div key={item.id} className={styles.LinkContainer}>
            <Link href={item.path}>
              <a className={styles.Link}>{item.label}</a>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default SideDrawer;
