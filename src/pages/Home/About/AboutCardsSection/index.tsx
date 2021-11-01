import { Trans } from "@lingui/react";
import Card, { CardProps } from "@/components/Card";

import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";
import styles from "./AboutCardsSection.module.scss";

const CARD_CONTENT: CardProps[] = [
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
function AboutCardsSection() {
  return (
    <div className={styles.AboutCardsSection}>
      {CARD_CONTENT.map((card: CardProps, i) => {
        return (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            image={card.image}
            btnMsg={card.btnMsg}
            horizontal={false}
          />
        );
      })}
    </div>
  );
}

export default AboutCardsSection;
