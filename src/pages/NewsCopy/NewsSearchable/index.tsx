import styles from "./NewsSearchable.module.scss";

import { useState } from "react";

import SearchIcon from "@/assets/icons/search_icon.svg";
import NewsHeader from "@/components/NewsHeader";
import Community from "../Community";
import Press from "../Press";

import newsData from "../newsData.json";
import filterData from "@/helpers/filterData";

export type Props = {
  data: {
    display: number;
    items: Article[];
    lastBuildData: string;
    start: number;
    total: number;
  };
};

function NewsSearchable({ data: { items } }: Props) {
  const [inputtedText, setInputtedText] = useState("");
  // Data provided by API call in Pages/News (getStaticProps)
  const [apiData, setApiData] = useState(items);
  // Data provided by LocalData in newsData.json
  const [localData, setLocalData] = useState(newsData);

  function filter(apiData: any, localData: any, inputtedText: string) {
    if (inputtedText.length <= 1) {
      setApiData(items);
      setLocalData(newsData);
      return;
    } else {
      const filteredApiData = filterData(apiData, inputtedText);
      const filteredLocalData = filterData(localData, inputtedText);

      setApiData(filteredApiData);
      setLocalData(filteredLocalData);
    }
  }

  return (
    <div>
      <div className={styles.HeaderContainer}>
        <NewsHeader>Press publicity</NewsHeader>
        <div className={styles.Search}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Search"
              type="text"
              value={inputtedText}
              onChange={(e) => {
                filter(apiData, localData, inputtedText);
                setInputtedText(e.target.value);
              }}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <Press APIdata={apiData} searchTerm={inputtedText} />
      <Community localdata={localData} searchTerm={inputtedText} />
    </div>
  );
}

export default NewsSearchable;
