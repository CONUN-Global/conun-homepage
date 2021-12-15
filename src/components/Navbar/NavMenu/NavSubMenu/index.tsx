import React from "react";
import Link from "next/link";
import classNames from "classnames";

import { NAV_PRODUCTS } from "../../NavbarItems";

import styles from "../NavMenuCommon.module.scss";

interface ClickableProps {
  href?: string;
  label: string | JSX.Element;
}

interface Props extends ClickableProps {}

interface SubItemProps extends ClickableProps {
  description: string | JSX.Element;
}

function Clickable({ href, label }: ClickableProps) {
  return (
    <Link href={href!}>
      <a>{label}</a>
    </Link>
  );
}

function NonClick({ label }: { label: string | JSX.Element }) {
  return <div className={styles.NonClick}>{label}</div>;
}

function SubItem({ href, label, description }: SubItemProps) {
  return (
    <div className={styles.SubItem}>
      <Link href={href!}>
        <a className={styles.Title}>
          <div>{label}</div>
          <div className={styles.Description}>{description}</div>
        </a>
      </Link>
    </div>
  );
}

function NavSubMenu({ href, label }: Props) {
  return (
    <div className={styles.NavMenuElement}>
      <div className={classNames(styles.NavMenuCell, styles.SubMenuParent)}>
        <div className={href ? styles.CellInner : styles.NonClick}>
          {href ? (
            <Clickable href={href} label={label} />
          ) : (
            <NonClick label={label} />
          )}
        </div>
        <div className={styles.SubMenu}>
          {NAV_PRODUCTS.map((p) => (
            <SubItem
              key={p.id}
              href={p.path}
              label={p.label}
              description={p.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavSubMenu;
