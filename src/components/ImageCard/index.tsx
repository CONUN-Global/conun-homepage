import React, { useState } from "react";
import Image from "next/image";

import styles from "./ImageCard.module.scss";
import { useEffect } from "react";

function ImageCard({ member, i }: any) {
  const [img, setImg] = useState<string>(member?.front);
  const [isHoverOvered, setIsHoverOvered] = useState(false);

  useEffect(() => {
    setImg(member?.front);
  }, [member]);

  const handleMouseEnter = () => {
    setImg(member?.overlay);
    setIsHoverOvered(true);
  };
  const handleMouseLeave = () => {
    setImg(member?.front);
    setIsHoverOvered(false);
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
      {isHoverOvered && (
        <div className={styles.TextContainer}>
          <div className={styles.TextLayoutTop}>
            <p>
              {member.nameKo} <br /> {member.nameEn}
            </p>
            <p className={styles.JobTitle}>{member.title}</p>
          </div>
          <div className={styles.TextLayoutBottom}>
            {member?.roles?.map((role: string, i: number) => (
              <p key={i}>{role}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default ImageCard;
