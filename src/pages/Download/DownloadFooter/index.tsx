// import React, { useState } from "react";
import { DOWNLOADS_MENU } from "./DownloadMenu";
import Dropdown from "@/components/Dropdown";
// import DropdownLink from "@/components/Dropdown/DropdownLink";
import styles from "./DownloadFooter.module.scss";

function DownloadFooter() {
  // const [isWindowOpen, setIsWindowOpen] = useState(false);
  // const [isLinuxOpen, setIsLinuxOpen] = useState(false);
  // const [isMacOpen, setIsMacOpen] = useState(false);
  // const software = ["METACON", "CONUN DRIVE", "CONUN MANAGER", "DOWNLOAD ALL"];

  return (
    <div className={styles.Footer}>
      <h1>Conun Product Downloads</h1>
      <p>
        Select your operating system to dowload CONUN Drive, <br />
        Manager, and Manager Extension.
      </p>
      {DOWNLOADS_MENU.map((menu, i: number) => (
        <Dropdown key={i} menu={menu} />
      ))}
      {/* <div onClick={() => setIsWindowOpen((prev) => !prev)}>Windows</div>
      {isWindowOpen ? (
        <ul>
          {DOWNLOADS_MENU[0].links.map((link, i: number) => (
            <Dropdown key={i} name={software[i]} link={link} />
          ))}
        </ul>
      ) : null}
      <div onClick={() => setIsLinuxOpen((prev) => !prev)}>Linux</div>
      {isLinuxOpen ? (
        <ul>
          {DOWNLOADS_MENU[1].links.map((link, i: number) => (
            <Dropdown key={i} name={software[i]} link={link} />
          ))}
        </ul>
      ) : null}
      <div onClick={() => setIsMacOpen((prev) => !prev)}>Mac</div>
      {isMacOpen ? (
        <ul>
          {DOWNLOADS_MENU[2].links.map((link, i: number) => (
            <Dropdown key={i} name={software[i]} link={link} />
          ))}
        </ul>
      ) : null} */}
    </div>
  );
}
export default DownloadFooter;
