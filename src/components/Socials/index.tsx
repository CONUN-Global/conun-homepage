import classNames from "classnames";

import { LINKS_ITEMS } from "./LinkItems";

import Item from "@/components/List/Item";

import styles from "./Socials.module.scss";

type Align = "vertical" | "horizontal";

interface Props {
  className?: string;
  alignment?: Align;
}

function Socials({ className, alignment = "vertical" }: Props) {
  return (
    <div
      className={classNames(styles.SocialIcons, styles[alignment], className)}
    >
      {LINKS_ITEMS.map((link: any, i: number) => {
        return <Item key={i} noStyle icon={link.icon} path={link.link} />;
      })}
    </div>
  );
}
export default Socials;
