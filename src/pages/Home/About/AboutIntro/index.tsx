import Link from "next/link";
import { Trans } from "@lingui/react";

import Card from "@/components/Card";
import { CardProps } from "@/components/Card";
import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";
import styles from "./About.module.scss";

const CARD_CONTENT: any = [
  {
    title: <Trans id="Get Power By Conun" />,
    description: (
      <Trans id="Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably." />
    ),
    image: <GetMicrochip className={styles.AboutIntroIcons} />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Join our ecosystem" />,
    description: (
      <Trans id="Become part of the CONUN network and you can benefit from our current and future blockchain-based projects." />
    ),
    image: <EcosystemIcon className={styles.AboutIntroIcons} />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Give power to earn" />,
    description: (
      <Trans id="By sharing your personal computing resources you become part of a P2P network where earning is easy." />
    ),
    image: <GiveMicrochip className={styles.AboutIntroIcons} />,
    btnMsg: <Trans id="Learn More" />,
  },
];
function AboutIntro() {
  return (
    <div className={styles.AboutPage}>
      <div id="about" className={styles.AboutIntroSection}>
        <div className={styles.AboutLeftContainer}>
          <div>Creating</div>
          <div className={styles.MainTitle}>
            <p>Blockchain </p>
            <p>Based</p>
          </div>
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
        {CARD_CONTENT.map((card: CardProps, i: number) => {
          return (
            <Card
              key={i}
              title={card.title}
              className={styles.AboutCard}
              description={card.description}
              image={card.image}
              btnMsg={card.btnMsg}
              size="medium"
            />
          );
        })}
      </div>
      <div className={styles.VideoContainer}>
        <video
          src={"https://youtu.be/pwkrE2mpIiA"}
          width="450"
          height="500"
          controls
        ></video>
      </div>
    </div>
  );
}
export default AboutIntro;
