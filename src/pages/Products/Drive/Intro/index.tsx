import { Trans } from "@lingui/react";

import Caption from "@/components/Caption";

import DriveChart from "@/assets/icons/chart_drive.svg";
import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroContainer}>
        <Caption
          className={styles.Caption}
          titleColor="blue"
          textSize="large"
          title={<Trans id="Conun Drive" />}
        />
        <p className={styles.Description}>
          <Trans id="Conun Drive P2P File Share Powered by IPFS. Conun Drive is a decentralized content sharing system, this means there is no centralized server storing content. All content will be verified on Conun’s Private Blockchain. As soon as users connect to the Conun Drive network their computer becomes a Conun Drive network participant. Participants can choose which files to store or publish, if published, rewards can be gained by other participants. In addition, all actions that occur on the Conun Drive network will be stored on the Conun Private Blockchain, thus all actions are immutable and secure." />
        </p>
        <div className={styles.ChartContainer}>
          <DriveChart />
        </div>
      </div>
    </div>
  );
}
export default Intro;
