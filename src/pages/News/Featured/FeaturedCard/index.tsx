import Author from "@/components/Author";
import { NewsDataObj } from "@/types/index";

import styles from "./FeaturedCard.module.scss";

interface Props {
  newsData: NewsDataObj;
  // size: "small" | "large";
}
// const example = {
//   id: 12,
//   title: "KYC 인증을 통한 락업 물량 배분 방법 안내",
//   date: "21 Dec 2021",
//   url: "./assets/KYC_verification_guide.pdf",
//   source: "internal",
//   caption: "락업 물량을 배분 받고 싶으신 분들을 위한 KYC 인증 방법입니다.",
//   author: "Blockchain Team",
//   isAnnouncement: true,
//   isHowTo: true,
//   thumbnail: "./assets/thumbs/KYC_verification_thumb.png",
// };

function FeaturedCard({ newsData }: Props) {
  return (
    <div className={styles.Container}>
      <div>
        <img className={styles.Image} src={newsData.thumbnail} />
      </div>
      <div className={styles.InfoContainer}>
        <div className={styles.TextContainer}>
          <h1 className={styles.Title}>{newsData.title}</h1>
          <div className={styles.Caption}>{newsData.caption}</div>
        </div>
        <Author newsData={newsData} />
      </div>
    </div>
  );
}

export default FeaturedCard;
