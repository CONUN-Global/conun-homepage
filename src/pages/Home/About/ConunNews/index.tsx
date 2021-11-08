import { Trans } from "@lingui/react";
import Card from "@/components/Card";

import youtubeThumbnail from "../../../../assets/pics/youtube-thumbnail.jpg";
import Github from "@/assets/icons/github.svg";

import styles from "./ConunNews.module.scss";

const CONUN_NEWS = [
  {
    header: <Trans id="August 14 2021" />,
    title: <Trans id="Explore and Share Digital Assets with CONUN Drive" />,
    image: youtubeThumbnail,
  },
  {
    header: <Trans id="August 14 2021" />,
    title: <Trans id="Explore and Share Digital Assets with CONUN Drive" />,
    image: youtubeThumbnail,
  },
  {
    header: <Trans id="August 14 2021" />,
    title: <Trans id="Explore and Share Digital Assets with CONUN Drive" />,
    image: youtubeThumbnail,
  },
];
function ConunNews() {
  return (
    <div className={styles.ConunNews}>
      <p>Join Conun&apos;s open source community</p>
      <div className={styles.Community}>
        <Github />

        <div>icons</div>
        <div>icons</div>
        <div>icons</div>
      </div>
      <p className={styles.Title}>CONUN NEWS</p>
      <div className={styles.CardContainer}>
        {CONUN_NEWS.map((news: any, i: number) => {
          return (
            <Card
              className={styles.Card}
              round
              key={i}
              header={news.header}
              title={news.title}
              srcImg={news.image}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
export default ConunNews;
