import React from "react";
import classNames from "classnames";

import { NewsDataObj } from "@/types/index";

import styles from "./NewsCard.module.scss";
import LinkArrow from "../../assets/icons/link_arrow.svg";

type Size = "small" | "large";

interface Props {
  newsData: NewsDataObj;
  size: Size;
  className?: string;
  gap?: boolean;
}

interface DateLinkProps {
  url: string;
  source: string;
  date: string;
  size: Size;
}

// function Author({ picture, name }: { picture: string; name: string }) {
//   return (
//     <div className={styles.Author}>
//       <div className={styles.Picture}>{picture}</div>
//       <div className={styles.By}>posted by</div>
//       <div className={styles.Name}>{name}</div>
//     </div>
//   );
// }

function DateAndLink({ date, size }: DateLinkProps) {
  return (
    <div className={classNames(styles.DateLabel, styles[size])}>
      {/* <ExternalLinkIcon source={source} url={url} />
      <div>|</div> */}
      <div>{new Date(date).toDateString()}</div>
    </div>
  );
}

function NewsCard({ newsData, size, gap }: Props) {
  /// NOT SURE IF ALL INTERNAL LINKS ARE PDFS
  const linkText =
    newsData.source === "internal"
      ? "Download PDF"
      : `View on ${newsData.source}`;

  return (
    <div
      className={classNames(styles.NewsCard, styles[size], {
        [styles.gap]: gap,
      })}
    >
      <div className={styles.textContainer}>
        <a
          href={newsData.url}
          target="_blank"
          rel="noreferrer"
          className={styles.Title}
        >
          {newsData.title}
        </a>
        {size == "large" && (
          <div className={styles.Caption}>{newsData.caption}</div>
        )}
      </div>

      <div className={styles.dateLinkContainer}>
        <DateAndLink
          url={newsData.url}
          source={newsData.source}
          size={size}
          date={newsData.date}
        />

        <a
          href={newsData.url}
          target="_blank"
          rel="noreferrer"
          className={styles.linkButton}
        >
          <button>
            {linkText}
            <div className={styles.svgContainer}>
              <LinkArrow />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
