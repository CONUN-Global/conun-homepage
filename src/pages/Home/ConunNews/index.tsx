import Image from "next/image";
import classNames from "classnames";
import { CONUN_NEWS } from "./ConunNewsContent";

import Card from "@/components/Card";

import Github from "@/assets/icons/github.svg";
import Xangle from "@/assets/icons/xangle.svg";
import Medium from "@/assets/icons/medium.svg";

import styles from "./ConunNews.module.scss";

function ConunNews() {
  return (
    <div className={styles.ConunNews}>
      <p>Join Conun&apos;s open source community</p>
      <div className={styles.Community}>
        <div className={classNames(styles.IconBox, styles.Github)}>
          <Github className={styles.Icon} />
        </div>
        <div className={classNames(styles.IconBox, styles.Xangle)}>
          <Xangle className={styles.Icon} />
        </div>
        <div className={classNames(styles.IconBox, styles.Medium)}>
          <Medium className={styles.Icon} />
        </div>
      </div>
      <p className={styles.Title}>CONUN NEWS</p>
      <div className={styles.CardContainer}>
        {CONUN_NEWS.map((news: any, i: number) => {
          return (
            <Card
              key={i}
              round
              className={styles.Card}
              header={news.header}
              title={news.title}
            >
              <Image
                width={500}
                height={350}
                src={news.image}
                className={styles.ImageContainer}
                alt="conun news"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default ConunNews;
