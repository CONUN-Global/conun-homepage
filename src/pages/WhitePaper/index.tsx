import WhitePaperCard from "./WhitePaperCard";

import styles from "./WhitePaper.module.scss";

function WhitePaper() {
  return (
    <div className={styles.WhitePaperPage}>
      <div className={styles.WhitePaperCardContainer}>
        <WhitePaperCard />
      </div>
    </div>
  );
}
export default WhitePaper;
