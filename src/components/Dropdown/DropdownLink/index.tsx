import styles from "./DropdownLink.module.scss";
import DownloadArrow from "../../../assets/icons/downloadArrow.svg";

interface DropdownLinkProps {
  name: string;
  link?: string;
  isWhitePaperGreen?: boolean;
  onclick?: () => void;
}

function DropdownLink({ link, name, onclick }: DropdownLinkProps) {
  return (
    <li onClick={onclick} className={styles.DropdownGreenHover}>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
        <DownloadArrow />
      </a>
    </li>
  );
}
export default DropdownLink;
