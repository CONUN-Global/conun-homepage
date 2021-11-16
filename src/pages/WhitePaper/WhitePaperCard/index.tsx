import React, { useState, useEffect } from "react";
import { Trans } from "@lingui/react";
import classNames from "classnames";

import DropdownLink from "@/components/Dropdown/DropdownLink";
import WorldIcon from "@/assets/icons/world.svg";

import styles from "./WhitePaperCard.module.scss";

const LANGUAGE = [
  { name: "English", path: "./assets/whitepaper/en.pdf" },
  {
    name: "한국어",
    path: "./assets/whitepaper/ko.pdf",
  },
  {
    name: "中文",
    path: "./assets/whitepaper/en.pdf",
  },
  {
    name: "日本語",
    path: "./assets/whitepaper/en.pdf",
  },
];

interface WhitePaperCardProps {
  key: number;
  whitePaper: string;
}
function WhitePaperCard({ whitePaper }: WhitePaperCardProps) {
  const isWhitePaperGreen = whitePaper === "technology";
  const [isLangSelectorOpen, setLanguageSelector] = useState(true);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    console.log("isLangSelectorOpen", isLangSelectorOpen);
  }, [isLangSelectorOpen]);
  return (
    <div
      className={classNames(styles.WhitePaperCard, {
        [styles.whitepaperGreen]: isWhitePaperGreen,
      })}
    >
      <h3 className={styles.Title}>
        <Trans id="{type} whitepaper" values={{ type: whitePaper }} />
      </h3>
      <p className={styles.Description}>
        <Trans
          id="To know more about Conan's {type}, download Conan's white paper."
          values={{ type: whitePaper }}
        />
      </p>

      <p>PDF Download</p>
      <div className={styles.LanguageSelector}>
        <div
          onClick={() => {
            setLanguageSelector((prev) => !prev);
          }}
          className={classNames(
            isWhitePaperGreen ? styles.SelectedGreen : styles.SelectedBlue
          )}
        >
          <WorldIcon className={styles.WorldIcon} />
          <p>{language}</p>
        </div>
        {isLangSelectorOpen && (
          <ul className={styles.LanguageOptions}>
            {LANGUAGE.filter((lang) => lang.name !== language).map(
              (lang, i: number) => (
                <DropdownLink
                  onclick={() => {
                    setLanguage(lang.name);
                    setLanguageSelector((prev) => !prev);
                  }}
                  key={i}
                  name={lang.name}
                  link={lang.path}
                  isWhitePaperGreen={isWhitePaperGreen}
                />
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
export default WhitePaperCard;
