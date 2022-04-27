import Socials from "@/components/Socials";
import SearchIcon from "@/assets/icons/search_icon.svg";

import styles from "./NewsHead.module.scss";
import { useState } from "react";

function NewsHead() {
  const [inputtedText, setInputtedText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(inputtedText);

    setInputtedText("");
  }

  return (
    <div className={styles.HeadlineContainer}>
      <div className={styles.HeadlineBox}>
        <h1>NEWS</h1>
        <div className={styles.SocialSearch}>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={inputtedText}
              onChange={(e) => setInputtedText(e.target.value)}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          <Socials className={styles.SocialLinks} alignment="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default NewsHead;
