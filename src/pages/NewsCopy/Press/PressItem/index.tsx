import photoFetch from "@/helpers/photoFetch";
import { useEffect, useState } from "react";

import { Article } from "@/types/index";

import Photo from "@/assets/icons/conun-logo.svg";

import styles from "./PressItem.module.scss";

type Image = {
  display: number;
  items: {
    link: string;
    sizeHeight: string;
    sizeWidth: string;
    thumbnail: string;
    title: string;
  }[];
  start: number;
  total: number;
};

function PressItem({ article }: Article) {
  const [image, setImage] = useState<Image>({});

  useEffect(() => {
    async function getPhoto(article: Article) {
      const data = await photoFetch(article);
      setImage(data);
    }

    getPhoto(article);
  }, [article]);

  let photoURL;
  if (image?.items?.length > 0) {
    photoURL = image.items[0].thumbnail;
  } else {
    photoURL = Photo;
  }

  const date = new Date(article.pubDate);

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.CardContainer}>
        <div className={styles.ImageContainer}>
          <img alt={article.title} src={photoURL} className={styles.Image} />
        </div>
        <div className={styles.TextContainer}>
          <h3 className={styles.Title}>{article.title}</h3>
          <div className={styles.Description}>
            {article.description.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <div className={styles.Date}>{date.toLocaleDateString("ko-KR")}</div>
        </div>
      </div>
    </a>
  );
}

export default PressItem;
