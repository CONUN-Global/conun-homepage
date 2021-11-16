import Card from "@/components/Card";
import { CardProps } from "@/components/Card";
import VideoPlayer from "@/components/VideoPlayer";

import { CARD_CONTENT } from "./CardContent";

import styles from "./AboutVideo.module.scss";

function AboutVideo() {
  return (
    <div className={styles.About}>
      <div className={styles.AboutCardsSection}>
        {CARD_CONTENT.map((card: CardProps, i: number) => {
          return (
            <Card
              key={i}
              title={card.title}
              className={styles.AboutCard}
              description={card.description}
              btnMsg={card.btnMsg}
            >
              <div className={styles.ImageContainer}>{card.image}</div>
            </Card>
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
