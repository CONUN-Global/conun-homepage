import React, { useState } from "react";
import DropdownLink from "@/components/Dropdown/DropdownLink";

import styles from "./Dropdown.module.scss";

interface DropdownProps {
  menu: {
    osName: string;
    icon: React.ReactNode;
    links: string[];
  };
}

function Dropdown({ menu: { osName, links, icon } }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);
  const softwear = ["Metacon", "Conun Drive", "Conun Manager", "Download All"];
  return (
    <div className={styles.DropdownContainer}>
      <div className={styles.Icon}>{icon}</div>
      <div className={styles.DropdowListContainer}>
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
    </div>
  );
}

export default Dropdown;
