import NewsHeader from "@/components/NewsHeader";
import styles from "./Community.module.scss";
import Button from "./SocialMediaButton";

// import { NewsDataObj, NewsSource } from "@/types/index";

import data from "../newsData.json";

function Community() {
  return (
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
      <ul>
        {data.map((newsItem) => (
          <li key={newsItem.id}>{newsItem.caption}</li>
        ))}
      </ul>
    </div>
  );
}

export default Community;
