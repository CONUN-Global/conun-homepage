import classNames from "classnames";
import styles from "./DropdownLink.module.scss";
import DownloadArrow from "../../../assets/icons/downloadArrow.svg";

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
    <a href={link} target="_blank" rel="noreferrer">
      <li
        onClick={onclick}
        className={classNames(
          isWhitePaperGreen
            ? styles.DropdownGreenHover
            : styles.DropdownBlueHover
        )}
      >
        {name}
        <DownloadArrow />
      </li>
    </a>
  );
}
export default DropdownLink;
