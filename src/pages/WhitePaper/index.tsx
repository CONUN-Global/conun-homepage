import { Trans } from "@lingui/react";
import classNames from "classnames";

import Card from "@/components/Card";
import DropdownLink from "@/components/Dropdown/DropdownLink";

import styles from "./WhitePaper.module.scss";

const WHITE_PAPER = ["technology", "business"];
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
function WhitePaper() {
  return (
    <div className={styles.WhitePaperPage}>
      {WHITE_PAPER.map((whitePaper, i: number) => {
        const isWhitePaperBlue = whitePaper === "business";
        return (
          <Card
            vertical
            key={i}
            textSize="large"
            className={classNames(styles.WhitePaperCard, {
              [styles.whitepaperGreen]: isWhitePaperBlue,
            })}
            title={
              <Trans id="{type} whitepaper" values={{ type: whitePaper }} />
            }
            description={
              <Trans
                id="To know more about Conan's {type}, download Conan's white paper."
                values={{ type: whitePaper }}
              />
            }
          >
            <p>PDF Download</p>
            <div className={styles.LanguageSelector}>
              <div className={styles.Selected}>English</div>
              <ul className={styles.LanguageOptions}>
                {LANGUAGE.map((lang, i: number) => (
                  <DropdownLink key={i} name={lang.name} link={lang.path} />
                ))}
              </ul>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
export default WhitePaper;
