import { Trans } from "@lingui/macro";

import { BenefitsIcons } from "../Icons";

import Caption from "@/components/Caption";
import Text from "@/components/Text";
import Benefits from "../../Benefits";

import Chart_Computer_Blocks from "@/assets/icons/chart_computer_blocks.svg";

import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroContainer}>
        <div className={styles.Card}>
          <div className={styles.TextContainer}>
            <Caption
              headColor="sky"
              header={<Trans id="METACON, Cryptocurrency Wallet" />}
              title={<Trans id="Introduction" />}
            />
            <p className={styles.Caption}>
              <Trans id="The Gateway to the CONUN Ecosystem!" />
            </p>
            <Text
              description={
                <Trans id="METACON plays the role of a mediator that connects you to the applications that exist in the CONUN ecosystem. Since it's connected to the CONUN Mainnet, we guarantee fast and safe payment and rewards system for users in the CONUN's services like the DSC platform and the Drive." />
              }
            />
          </div>
          <div className={styles.ImageContainer}>
            <Chart_Computer_Blocks />
          </div>
        </div>
        <Benefits iconList={BenefitsIcons} />
      </div>
    </div>
  );
}

export default Intro;
