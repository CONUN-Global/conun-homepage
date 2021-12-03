import Image from "next/image";

import Link from "next/dist/client/link";

import { SOCIAL_LINKS } from "./SocialLinks";
import { CONUN_NEWS } from "./Content";

import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";
import Item from "@/components/List/Item";

import styles from "./ConunNews.module.scss";

function ConunNews() {
  return (
    <div className={styles.ConunNews}>
      <div className={styles.ConunNewsContainer}>
        <p>Join Conun&apos;s open source community</p>
        <div className={styles.Community}>
          {SOCIAL_LINKS.map((link, index: number) => {
            return <Item key={index} icon={link.icon} path={link.path} />;
          })}
        </div>
        <p className={styles.Title}>LATEST NEWS</p>
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
                  <div className={styles.ButtonContainer}>
                    <Link href={news.link}>
                      <a>{news.btnMsg}</a>
                    </Link>
                  </div>
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
