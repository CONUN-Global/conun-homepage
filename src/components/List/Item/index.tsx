import Link from "next/link";
import classNames from "classnames";

import styles from "./Item.module.scss";

interface ItemProps {
  name?: string;
  path: string;
  icon?: React.ReactNode;
  social?: "discord" | "medium" | "github" | "xangle";
}
function Item({ name, path, icon }: ItemProps) {
  return (
    <div className={styles.ItemContainer}>
      <Link href={path}>
        <a>{name}</a>
      </Link>
      {icon && <div className={classNames(styles.SocialIcon)}>{icon}</div>}
    </div>
  );
}

export default Item;
