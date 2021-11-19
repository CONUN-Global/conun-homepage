import Image from "next/image";
import classNames from "classnames";
import { CONUN_NEWS } from "./ConunNewsContent";

import Vertical from "@/components/Card/Vertical";
import Text from "@/components/Text";
import Github from "@/assets/icons/github.svg";
import styles from "./ConunNews.module.scss";

function ConunNews() {
  return (
    <div className={styles.ConunNews}>
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
                width={500}
                height={350}
                src={news.image}
                className={styles.ImageContainer}
                alt="conun news"
              />
              <Text
                className={styles.TextBox}
                caption={news.caption}
                title={news.title}
              />
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}
export default ConunNews;
