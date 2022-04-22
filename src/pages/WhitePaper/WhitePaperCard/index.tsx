import React, { useState } from "react";
import { Trans } from "@lingui/macro";
import classNames from "classnames";

import DropdownLink from "@/components/Dropdown/DropdownLink";

import WorldIcon from "@/assets/icons/world.svg";
import Dropdown from "@/assets/icons/dropdown.svg";

import styles from "./WhitePaperCard.module.scss";

interface Value {
  name: string;
  path: string;
}
const LANGUAGE: { [key: string]: Value[] } = {
  technology: [
    { name: "English", path: "./assets/technology_whitepaper/en.pdf" },
    {
      name: "한국어",
      path: "./assets/technology_whitepaper/ko.pdf",
    },
    {
      name: "中文",
      path: "./assets/technology_whitepaper/cn.pdf",
    },
    {
      name: "日本語",
      path: "./assets/technology_whitepaper/jp.pdf",
    },
  ],
  business: [
    { name: "English", path: "./assets/business_whitepaper/en.pdf" },
    {
      name: "한국어",
      path: "./assets/business_whitepaper/ko.pdf",
    },
    {
      name: "中文",
      path: "./assets/business_whitepaper/cn.pdf",
    },
    {
      name: "日本語",
      path: "./assets/business_whitepaper/jp.pdf",
    },
  ],
};

interface WhitePaperCardProps {
  key: number;
  whitePaper: string;
}
function WhitePaperCard({ whitePaper }: WhitePaperCardProps) {
  const isWhitePaperGreen = whitePaper === "technology";
  const [isLanguageDropdownOpen, setLanguageDropdown] = useState(false);

  return (
    <div
      className={classNames(styles.WhitePaperCard, {
        [styles.whitepaperGreen]: isWhitePaperGreen,
      })}
    >
      <div className={styles.TextContainer}>
        <h3 className={styles.Title}>
          <Trans id="{type} whitepaper" values={{ type: whitePaper }} />
        </h3>
        <p className={styles.Description}>
          <Trans
            id="To know more about Conun's {type}, download Conun's white paper."
            values={{ type: whitePaper }}
          />
        </p>
      </div>
      <div className={styles.DropdownContainer}>
        <p>
          <Trans id="PDF Download" />
        </p>
        <div
          className={styles.LanguageSelector}
          onClick={() => setLanguageDropdown((prev) => !prev)}
        >
          <div
            className={classNames(
              isWhitePaperGreen ? styles.SelectedGreen : styles.SelectedBlue
            )}
          >
            <WorldIcon className={styles.WorldIcon} />
            <p>Select Language</p>
            <div className={styles.DropdownIcon}>
              <Dropdown />
            </div>
          </div>
          {isLanguageDropdownOpen && (
            <ul className={styles.LanguageOptions}>
              {LANGUAGE[whitePaper].map((lang, i: number) => (
                <DropdownLink
                  key={i}
                  name={lang.name}
                  link={lang.path}
                  isWhitePaperGreen={isWhitePaperGreen}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default WhitePaperCard;
