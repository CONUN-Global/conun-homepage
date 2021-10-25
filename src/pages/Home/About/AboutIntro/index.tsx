import Link from "next/link";

import Card from "@/components/Card";
import { CardProps } from "@/components/Card";
import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";
import styles from "./About.module.scss";

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
function AboutIntro() {
  return (
    <div className={styles.AboutPage}>
      <div id="about" className={styles.AboutIntroSection}>
        <div className={styles.AboutLeftContainer}>
          <div>Creating</div>
          <div className={styles.MainTitle}>Blockchain Based</div>
          <div>Solutions</div>
        </div>
        <div className={styles.AboutRightContainer}>
          <h2 className={styles.Title}>About Conun</h2>
          <div className={styles.Description}>
            CONUN is a blockchain-based distributed supercomputing platform. It
            is a service platform that allows the processing of high-performance
            computing resources by sharing the idle resources of the
            participants`&apos; personal computers and smartphones .
          </div>
          <div className={styles.ButtonContainer}>
            <Link href={"./assets/whitepaper/en.pdf"}>
              <a
                target="_blank"
                className={styles.WhitepaperLink}
                rel="noreferrer"
              >
                See Whitepaper
              </a>
            </Link>
          </div>
        </div>
      </div>
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
    </div>
  );
}
export default AboutIntro;
