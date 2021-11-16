import Image from "next/image";
import { CONUN_NEWS } from "./ConunNewsContent";

import Card from "@/components/Card";

import Github from "@/assets/icons/github.svg";

import styles from "./ConunNews.module.scss";

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
