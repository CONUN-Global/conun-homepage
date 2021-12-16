import { Trans } from "@lingui/macro";
import { SOCIAL_LINKS } from "./SocialLinks";
import data from "../../News/newsData.json";
import Vertical from "@/components/Card/Vertical";

import Item from "@/components/List/Item";
import NewsThumb from "@/components/NewsThumb";
import NewsCard from "@/components/NewsCard";

import styles from "./ConunNews.module.scss";

function ConunNews() {
  const DataStream = data.slice(0, 4);

  return (
    <div className={styles.ConunNews}>
      <div className={styles.ConunNewsContainer}>
        <p className={styles.CommunityTitle}>
          <Trans id="Join Conun's open source community" />
        </p>
        <div className={styles.Community}>
          {SOCIAL_LINKS.map((link, index: number) => {
            return <Item key={index} icon={link.icon} path={link.path} />;
          })}
        </div>
        <div className={styles.TitleBox}>
          <p className={styles.Title}>
            <Trans id="LATEST NEWS" />
          </p>
        </div>
        <div className={styles.CardContainer}>
          {DataStream.map((news, i: number) => {
            return (
              <Vertical key={i} round className={styles.Card}>
                <NewsThumb newsData={news} thumbnailClean />
                <div className={styles.TextContainer}>
                  <NewsCard
                    newsData={news}
                    size="large"
                    gap
                    className={styles.Text}
                  />
                </div>
              </Vertical>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ConunNews;
