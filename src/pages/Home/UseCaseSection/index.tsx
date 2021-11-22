import { USE_CASE_CONTENT } from "./UseCaseCardContent";

import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";

import styles from "./UseCaseSection.module.scss";

function UseCaseSection() {
  return (
    <div className={styles.UseCaseSection}>
      <div className={styles.UseCaseContainer}>
        <p className={styles.Title}>DSC USE CASES</p>

        <div className={styles.CardContainer}>
          {USE_CASE_CONTENT.map((card, i: number) => {
            return (
              <Vertical key={i} className={styles.UseCaseCard} round>
                <div className={styles.ImageContainer}>{card.image}</div>
                <div className={styles.TextContainer}>
                  <Caption title={card.title} />
                  <p className={styles.Description}>{card.description}</p>
                </div>
              </Vertical>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UseCaseSection;
