import classNames from "classnames";

import { LINKS_ITEMS } from "./LinkItems";

import Item from "@/components/List/Item";

import styles from "./Socials.module.scss";

type SocialsProps = {
  className?: string;
};

function Socials({ className }: SocialsProps) {
  return (
    <div className={classNames(styles.SocialIcons, className)}>
      {LINKS_ITEMS.map((link, i: number) => {
        return <Item key={i} noStyle icon={link.icon} path={link.link} />;
      })}
    </div>
  );
}
export default Socials;
