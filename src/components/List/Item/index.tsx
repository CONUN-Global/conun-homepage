import Link from "next/link";
import classNames from "classnames";

import styles from "./Item.module.scss";

interface ItemProps {
  name?: string;
  path: string;
  icon?: React.ReactNode;
  noStyle?: boolean;
}
function Item({ name, path, icon, noStyle }: ItemProps) {
  if (noStyle) {
    return (
      <div className={styles.ItemContainerWithNoStyle}>
        <Link href={path}>{icon ? <a>{icon}</a> : <a>{name}</a>}</Link>
      </div>
    );
  }
  return (
    <div className={styles.ItemContainer}>
      <Link href={path}>
        {icon ? (
          <a className={classNames(styles.SocialIcon)}>{icon}</a>
        ) : (
          <a>{name}</a>
        )}
      </Link>
    </div>
  );
}

export default Item;
