import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";
import Button from "@/components/Button";
import VideoPlayer from "@/components/VideoPlayer";

import { CARD_CONTENT } from "./CardContent";

import styles from "./AboutVideo.module.scss";

function AboutVideo() {
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
      <div className={styles.VideoContainer}>
        <VideoPlayer url={"https://youtu.be/pwkrE2mpIiA"} />
      </div>
    </div>
  );
}
export default AboutVideo;
