import { USE_CASE_CONTENT } from "./UseCaseCardContent";

import Vertical from "@/components/Card/Vertical";
import Text from "@/components/Text";

import styles from "./UseCaseSection.module.scss";

function UseCaseSection() {
  return (
    <div className={styles.UseCaseSection}>
      <div className={styles.Title}>DSC USE CASES</div>
      <div className={styles.CardContainer}>
        {USE_CASE_CONTENT.map((card, i: number) => {
          return (
            <Vertical key={i} className={styles.UseCaseCard} round>
              <div className={styles.ImageContainer}>{card.image}</div>
              <Text
                className={styles.TextContainer}
                title={card.title}
                description={card.description}
              />
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}

export default UseCaseSection;
