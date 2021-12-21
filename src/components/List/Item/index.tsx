import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import styles from "./Item.module.scss";

interface ItemProps {
  name?: string | JSX.Element;
  path: string;
  icon?: React.ReactNode;
  noStyle?: boolean;
}
function Item({ name, path, icon, noStyle }: ItemProps) {
  const router = useRouter();

  const handlePath = (path: string) => {
    router.replace(path);
  };
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
  const external = path.startsWith("https");
  if (external) {
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
  } else {
    return (
      <div className={styles.ItemContainer}>
        <div onClick={() => handlePath(path)}>{name}</div>
      </div>
    );
  }
}

export default Item;
