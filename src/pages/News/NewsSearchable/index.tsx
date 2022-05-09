import styles from "./NewsSearchable.module.scss";

import { useEffect, useState } from "react";

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
  const [socialMediaFilter, setSocialMediaFilter] = useState("all");

  const [inputtedText, setInputtedText] = useState("");
  // Data provided by Naver API call in Pages/News (getStaticProps)
  const [apiData, setApiData] = useState(items);
  // Data provided by LocalData in newsData.json
  const [localData, setLocalData] = useState(newsData);

  //Filter Data on Search Input change
  function filter(apiData: any, localData: any, inputtedText: string) {
    if (inputtedText.length <= 1) {
      setApiData(items);
      setLocalData(newsData);
      return;
    } else {
      //Reset data if the searchbox is empty
      const filteredApiData = filterData(apiData, inputtedText);
      const filteredLocalData = filterData(localData, inputtedText);

      setApiData(filteredApiData);
      setLocalData(filteredLocalData);
    }
  }

  // Filters with Social Media buttons
  useEffect(() => {
    if (socialMediaFilter === "all") {
      setLocalData(newsData);
    } else {
      const socialMediaFilteredData = newsData.filter((item) => {
        return item.source === socialMediaFilter;
      });
      setLocalData(socialMediaFilteredData);
    }
  }, [socialMediaFilter]);

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
      <Community
        localdata={localData}
        searchTerm={inputtedText}
        socialMediaFilter={socialMediaFilter}
        setSocialMediaFilter={setSocialMediaFilter}
      />
    </div>
  );
}

export default NewsSearchable;
