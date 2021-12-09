import classNames from "classnames";

import styles from "./DropdownLink.module.scss";

interface DropdownLinkProps {
  name: string;
  link?: string;
  isWhitePaperGreen?: boolean;
  onclick?: () => void;
}

function DropdownLink({
  isWhitePaperGreen,
  link,
  name,
  onclick,
}: DropdownLinkProps) {
  return (
    <li
      onClick={onclick}
      className={classNames(
        isWhitePaperGreen ? styles.DropdownGreenHover : styles.DropdownBlueHover
      )}
    >
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </li>
  );
}
export default DropdownLink;
