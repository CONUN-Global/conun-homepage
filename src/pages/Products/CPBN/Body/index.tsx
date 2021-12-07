import { Trans } from "@lingui/macro";

import Chart_PBCN from "@/assets/icons/chart_pbcn.svg";
import styles from "./Body.module.scss";

function Body() {
  return (
    <div className={styles.Body}>
      <div className={styles.BodyContainer}>
        <div className={styles.TextContainer}>
          <div className={styles.Paragraph}>
            <p className={styles.Title}>
              <Trans id="VISION" />
            </p>
            <p className={styles.Description}>
              <Trans
                id="We envision a global decentralized network of various blockchains
            with thier own rules and functionalities operated in one seamless
            ecosystem."
              />
            </p>
            <p className={styles.Description}>
              <Trans id="CONUN continuously strives to bring value to our private blockchain network by creating blockchain based products that benefit users." />
            </p>
          </div>
          <div className={styles.Paragraph}>
            <p className={styles.Title}>
              <Trans id="UNIVERSAL ADVANTAGES" />
            </p>
            <p className={styles.Description}>
              <Trans id="By having our own network, CONUNs unique chain code contract will reward users  with a proven faster and more affordable network." />
            </p>
          </div>
        </div>
        <div className={styles.DiagramContainer}>
          <Chart_PBCN />
        </div>
      </div>
    </div>
  );
}
export default Body;
