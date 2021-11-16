import Card from "@/components/Card";

import { USE_CASE_CONTENT } from "./UseCaseCardContent";
import { CardProps } from "@/components/Card";

import styles from "./UseCaseSection.module.scss";

function UseCaseSection() {
  return (
    <div className={styles.UseCaseSection}>
      <div className={styles.Title}>DSC USE CASES</div>
      <div className={styles.CardContainer}>
        {USE_CASE_CONTENT.map((card: CardProps, i: number) => {
          return (
            <Card
              key={i}
              title={card.title}
              description={card.description}
              className={styles.UseCaseCard}
              round
            >
              <div className={styles.ImageContainer}>{card.image}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default UseCaseSection;
