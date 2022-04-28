import photoFetch from "@/helpers/photoFetch";
import { useEffect, useState } from "react";

import { Article } from "@/types/index";

import styles from "./PressItem.module.scss";

function PressItem({ article }: Article) {
  const [image, setImage] = useState({});

  useEffect(() => {
    async function getPhoto(article: Article) {
      const data = await photoFetch(article);
      setImage(data);
    }

    getPhoto(article);
  }, [article]);

  console.log("Image", image.items);
  let photoURL;
  if (image?.items?.length > 0) {
    photoURL = image.items[0].thumbnail;
  } else {
    photoURL = "THIS IS NOT AVAILABLE";
  }

  const date = new Date(article.pubDate);
  console.log("Date: ", date);
  console.log("Date: ", article.pubDate);

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.CardContainer}>
        <div className={styles.ImageContainer}>
          <img src={photoURL} className={styles.Image} />
        </div>
        <div className={styles.TextContainer}>
          <h3 className={styles.Title}>{article.title}</h3>
          <div className={styles.Description}>{article.description}</div>
          <div className={styles.Date}>{article.pubDate}</div>
        </div>
      </div>
    </a>
  );
}

export default PressItem;
