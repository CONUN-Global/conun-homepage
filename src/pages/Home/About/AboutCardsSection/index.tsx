import Card from "@/components/Card";

import { CardProps } from "@/components/Card";
import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";
import styles from "./AboutCardsSection.module.scss";

const CARD_CONTENT: CardProps[] = [
  {
    title: "Get Power By Conun",
    description:
      "Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably.",
    image: <GetMicrochip />,
    btnMsg: "Learn More",
  },
  {
    title: "Join our ecosystem",
    description:
      "Become part of the CONUN network and you can benefit from our current and future blockchain-based projects.",
    image: <EcosystemIcon />,
    btnMsg: "Learn More",
  },
  {
    title: "Give power to earn",
    description:
      "By sharing your personal computing resources you become part of a P2P network where earning is easy.",
    image: <GiveMicrochip />,
    btnMsg: "Learn More",
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
          />
        );
      })}
    </div>
  );
}

export default AboutCardsSection;
