import React, { useState } from "react";
import Image from "next/image";

import styles from "./ImageCard.module.scss";

function ImageCard({ member, i }: any) {
  const [img, setImg] = useState<string>(member?.front);

  const handleMouseEnter = () => {
    setImg(member?.overlay);
  };
  const handleMouseLeave = () => {
    setImg(member?.front);
  };
  return (
    <div
      key={i}
      data-id={member?.nameEn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.ImgCard}
    >
      <Image
        layout="responsive"
        src={img}
        alt={member?.nameEn}
        className={styles.ImageItem}
      />
    </div>
  );
}
export default ImageCard;
