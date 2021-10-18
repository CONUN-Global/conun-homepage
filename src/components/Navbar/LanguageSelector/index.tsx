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
  const setCurrentLocale = useStore((state) => state.setCurrentLocale);
  LOCALES.map((locale) => console.log(locale.label));
  return (
    <div className={styles.LanguageSelector}>
      <WorldIcon className={styles.WorldIcon} />
      <select
        name="locale"
        value={currentLocale}
        className={styles.LocaleSelect}
        onChange={(e: any) => setCurrentLocale(e.target.value)}
      >
        {LOCALES.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
