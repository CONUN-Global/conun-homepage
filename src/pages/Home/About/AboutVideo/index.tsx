import { Trans } from "@lingui/react";

import Card from "@/components/Card";
import { CardProps } from "@/components/Card";
import VideoPlayer from "@/components/VideoPlayer";

import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";

import styles from "./AboutVideo.module.scss";

const CARD_CONTENT: any = [
  {
    title: <Trans id="Get Power By Conun" />,
    description: (
      <Trans id="Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably." />
    ),
    image: <GetMicrochip />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Join our ecosystem" />,
    description: (
      <Trans id="Become part of the CONUN network and you can benefit from our current and future blockchain-based projects." />
    ),
    image: <EcosystemIcon />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Give power to earn" />,
    description: (
      <Trans id="By sharing your personal computing resources you become part of a P2P network where earning is easy." />
    ),
    image: <GiveMicrochip />,
    btnMsg: <Trans id="Learn More" />,
  },
];

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
              image={card.image}
              btnMsg={card.btnMsg}
            />
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
