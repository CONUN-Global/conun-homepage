import React, { useState } from "react";
import useStore from "@/store/store";

import WorldIcon from "@/assets/icons/world.svg";

import styles from "./LanguageSelector.module.scss";

const LOCALES = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "한국어",
    value: "ko",
  },
];

function LanguageSelector() {
  const currentLocale = useStore((store) => store.currentLocale);
  const [localeOpen, setLocaleOpen] = useState(false);
  const setCurrentLocale = useStore((store) => store.setCurrentLocale);

  const handleLocaleToggle = () => {
    setLocaleOpen(!localeOpen);
  };
  return (
    <div className={styles.LanguageSelector}>
      <WorldIcon className={styles.WorldIcon} />
      <div className={styles.LanguageDropdown}>
        <div className={styles.Current} onClick={handleLocaleToggle}>
          {LOCALES.find((lang) => lang.value === currentLocale)?.label}
        </div>
        {localeOpen && (
          <ul className={styles.LocaleSelect}>
            {LOCALES.map((locale) => (
              <li
                className={styles.LocaleOption}
                key={locale.value}
                value={locale.value}
                onClick={() => {
                  setCurrentLocale(locale.value);
                  setLocaleOpen(!localeOpen);
                }}
              >
                {locale.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LanguageSelector;
