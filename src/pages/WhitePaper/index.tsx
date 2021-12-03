import WhitePaperCard from "./WhitePaperCard";

import styles from "./WhitePaper.module.scss";

const WHITE_PAPER = ["technology", "business"];

function WhitePaper() {
  return (
    <div className={styles.WhitePaperPage}>
      <div className={styles.WhitePaperCardContainer}>
        {WHITE_PAPER.map((whitePaper: string, i: number) => {
          return <WhitePaperCard key={i} whitePaper={whitePaper} />;
        })}
      </div>
    </div>
  );
}
export default WhitePaper;
