import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";
import Text from "@/components/Text";
import { CARD_CONTENT } from "./CardContent";

import styles from "./Business.module.scss";

function Business() {
  return (
    <div className={styles.About}>
      <div className={styles.AboutCardsSection}>
        {CARD_CONTENT.map((card, i: number) => {
          return (
            <Vertical key={i} className={styles.AboutCard} round>
              <div className={styles.ImageContainer}>{card.image}</div>
              <div className={styles.TextContainer}>
                <Caption textSize="small" title={card.title} />
                <Text description={card.description} />
              </div>
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}
export default Business;
