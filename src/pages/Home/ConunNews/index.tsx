import Image from "next/image";
import classNames from "classnames";
import { CONUN_NEWS } from "./ConunNewsContent";

import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";
import Button from "@/components/Button";

import Github from "@/assets/icons/github.svg";
import styles from "./ConunNews.module.scss";

function ConunNews() {
  return (
    <div className={styles.ConunNews}>
      <div className={styles.ConunNewsContainer}>
        <p>Join Conun&apos;s open source community</p>
        <div className={styles.Community}>
          <div className={classNames(styles.IconBox, styles.Github)}>
            <Github className={styles.Icon} />
          </div>
        </div>
        <p className={styles.Title}>CONUN NEWS</p>
        <div className={styles.CardContainer}>
          {CONUN_NEWS.map((news, i: number) => {
            return (
              <Vertical key={i} round className={styles.Card}>
                <Image
                  width={620}
                  height={350}
                  src={news.image}
                  className={styles.ImageContainer}
                  alt="conun news"
                />
                <Caption
                  textSize="custom"
                  className={styles.TextTop}
                  header={news.title}
                  title={news.description}
                />
                <div className={styles.TextBottom}>
                  <div className={styles.Header}>{news.header}</div>
                  <Button className={styles.Button} noStyle>
                    {news.btnMsg}
                  </Button>
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
