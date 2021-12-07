import { Trans } from "@lingui/macro";
import SideChain from "@/assets/icons/side_chain.svg";
import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroContainer}>
        <div className={styles.TextContainer}>
          <p className={styles.Title}>
            <Trans id="CONUN PRIVATE" />
            <br />
            <Trans id="BLOCKCHAIN NETWORK" />
          </p>
          <p className={styles.Description}>
            <Trans id="CONUN private blockchain network has the ability to give users a more affordable, secure and faster network, with the all same capabilities as the Ethereum Network. This is because our network runs alongside the Ethereum main blockchain." />
          </p>
        </div>

        <div className={styles.DiagramContainer}>
          <SideChain />
        </div>
      </div>
    </div>
  );
}
export default Intro;
