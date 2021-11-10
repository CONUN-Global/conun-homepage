import React, { useState } from "react";
import DropdownLink from "@/components/Dropdown/DropdownLink";

import styles from "./Dropdown.module.scss";

interface DropdownProps {
  menu: {
    osName: string;
    links: string[];
  };
}

function Dropdown({ menu: { osName, links } }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);
  const softwear = ["Metacon", "Conun Drive", "Conun Manager", "Download All"];
  return (
    <div className={styles.DropdownContainer}>
      <div
        className={styles.DropdownButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        {osName}
      </div>
      {isOpen && (
        <ul className={styles.ButtonList}>
          {links.map((link: string, i: number) => (
            <DropdownLink key={i} name={softwear[i]} link={link} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
