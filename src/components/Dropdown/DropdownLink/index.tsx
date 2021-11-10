import styles from "./DropdownLink.module.scss";

interface DropdownLinkProps {
  name: string;
  link: string;
}

function DropdownLink({ link, name }: DropdownLinkProps) {
  return (
    <li className={styles.Dropdown}>
      <a href={link}>{name}</a>
    </li>
  );
}
export default DropdownLink;
