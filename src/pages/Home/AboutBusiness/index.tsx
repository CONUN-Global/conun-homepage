import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";
import Button from "@/components/Button";

import { CARD_CONTENT } from "./CardContent";

import styles from "./AboutBusiness.module.scss";

function AboutBusiness() {
  return (
    <div className={styles.About}>
      <div className={styles.AboutCardsSection}>
        {CARD_CONTENT.map((card, i: number) => {
          return (
            <Vertical key={i} className={styles.AboutCard} round>
              <div className={styles.ImageContainer}>{card.image}</div>
              <div className={styles.TextContainer}>
                <Caption textSize="small" title={card.title} />
                <div className={styles.Description}>
                  <p>{card.description}</p>
                  <Button className={styles.Button} variant="primary" round>
                    {card.btnMsg}
                  </Button>
                </div>
              </div>
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}
export default AboutBusiness;
