import React from "react";
import classNames from "classnames";

import { NewsDataObj } from "@/types/index";

import styles from "./NewsCard.module.scss";

type Size = "small" | "large";

interface Props {
  newsData: NewsDataObj;
  size: Size;
}

interface DateLinkProps {
  link: string;
  source: string;
  date: string;
  size: Size;
}

function Author({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.Author}>
      <div className={styles.Picture}>{picture}</div>
      <div className={styles.By}>posted by</div>
      <div className={styles.Name}>{name}</div>
    </div>
  );
}

function DateAndLink({ source, date, size }: DateLinkProps) {
  return (
    <div className={classNames(styles.DateLabel, styles[size])}>
      <span className={classNames(styles.Source)}>{source}</span>
      <span className={classNames(styles.Divider)}>|</span>
      <span className={classNames(styles.Date)}>{date}</span>
    </div>
  );
}

function NewsCard({ newsData, size }: Props) {
  return (
    <div className={classNames(styles.NewsCard, styles[size])}>
      <div className={styles.Title}>{newsData.title}</div>
      {size == "large" && (
        <div className={styles.Caption}>{newsData.caption}</div>
      )}
      <DateAndLink
        link={newsData.url}
        source={newsData.source}
        size={size}
        date={newsData.date}
      />
      <Author picture="C" name={newsData.author} />
    </div>
  );
}

export default NewsCard;
