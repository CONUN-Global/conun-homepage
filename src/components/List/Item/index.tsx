import Link from "next/link";
import classNames from "classnames";

import styles from "./Item.module.scss";

interface ItemProps {
  name?: string | JSX.Element;
  path: string;
  icon?: React.ReactNode;
  noStyle?: boolean;
}
function Item({ name, path, icon, noStyle }: ItemProps) {
  if (noStyle) {
    return (
      <div className={styles.ItemContainerWithNoStyle}>
        <Link href={path}>
          {icon ? (
            <a target="_blank" rel="noreferrer">
              {icon}
            </a>
          ) : (
            <a target="_blank" rel="noreferrer">
              {name}
            </a>
          )}
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.ItemContainer}>
      <Link href={path}>
        {icon ? (
          <a
            target="_blank"
            rel="noreferrer"
            className={classNames(styles.SocialIcon)}
          >
            {icon}
          </a>
        ) : (
          <a target="_blank" rel="noreferrer">
            {name}
          </a>
        )}
      </Link>
    </div>
  );
}

export default Item;
