import Socials from "@/components/Socials";
import SearchIcon from "@/assets/icons/search_icon.svg";

import styles from "./NewsHead.module.scss";

function NewsHead({ inputtedText, setInputtedText }: any) {
  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    setInputtedText(inputtedText);
  }

  return (
    <div className={styles.HeadlineContainer}>
      <div className={styles.HeadlineBox}>
        <h1>NEWS</h1>
        <div className={styles.SocialSearch}>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="Search"
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
