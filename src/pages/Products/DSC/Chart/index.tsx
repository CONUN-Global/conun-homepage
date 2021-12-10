import { Trans } from "@lingui/macro";

import Vertical from "@/components/Card/Vertical";

import Caption from "@/components/Caption";
import ChartDiagram from "@/assets/icons/dsc_charts.svg";

import styles from "./Chart.module.scss";

const introduction = {
  title: <Trans id="CONUN's business diagram" />,
  description: (
    <Trans id="With our business diagram, you can easily understand the projects at CONUN. The DSC platform, our main business, provides high-performance computing created by sharing idle resources from users' PCs or smartphones through a P2P network. Whoever wants to complete tasks requiring high-performance computing can upload them, then the CONUN Drive stores them. However, more than simple storage, the CONUN Drive aims to become a market where you can share and purchase digital assets. A cryptocurrency wallet, METACON, processes any transactions for rewards and payments in any CONUN's services like the DSC platform. It also provides a swapping service for users who want to exchange CONX to CON. (You can buy CON on Bithumb and BW.) All these services are running through the CONUN Private Blockchain Network, and you can check any information updated live on CONSCAN, CONUN’s blockchain explorer." />
  ),
  image: <ChartDiagram />,
};

function Chart() {
  return (
    <div className={styles.IntroContainer}>
      <Vertical className={styles.Card}>
        <div className={styles.TextContainer}>
          <Caption
            className={styles.Caption}
            headColor="sky"
            textSize="large"
            title={introduction.title}
          />
          <p className={styles.Description}>{introduction.description}</p>
        </div>
        <div className={styles.ImageContainer}>{introduction.image}</div>
      </Vertical>
    </div>
  );
}
export default Chart;
