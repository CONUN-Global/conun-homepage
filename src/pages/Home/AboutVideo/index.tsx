// import classNames from "classnames";
import Vertical from "@/components/Card/Vertical";
import Text from "@/components/Text";
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
              <Text
                textSize="small"
                className={styles.Caption}
                title={card.title}
                description={card.description}
              />
              <Button
                className={styles.Button}
                variant="primary"
                size="small"
                round
              >
                {card.btnMsg}
              </Button>
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
