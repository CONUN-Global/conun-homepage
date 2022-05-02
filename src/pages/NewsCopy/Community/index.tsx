import NewsHeader from "@/components/NewsHeader";
import styles from "./Community.module.scss";
import Button from "./SocialMediaButton";
import NewsItem from "./NewsItem";

import { NewsDataObj } from "@/types/index";

import data from "../newsData.json";

function Community() {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.CommunityContainer}>
        <div>
          <NewsHeader>Official Community</NewsHeader>
        </div>
        <div className={styles.BtnContainer}>
          <Button>ALL</Button>
          <Button>XANGLE</Button>
          <Button>YOUTUBE</Button>
          <Button>MEDIUM</Button>
          <Button>GITHUB</Button>
          <Button>DISCORD</Button>
        </div>
      </div>
      <div className={styles.NewsContainer}>
        {data.map((newsItem: NewsDataObj) => (
          <NewsItem newsData={newsItem} key={newsItem.id} />
        ))}
      </div>
    </div>
  );
}

export default Community;
