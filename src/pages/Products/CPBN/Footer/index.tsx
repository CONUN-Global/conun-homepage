import { Trans } from "@lingui/macro";

import ChartBCE from "@/assets/icons/charts_BCE.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <p className={styles.Title}>
          <Trans id="CONUN EXPLORER" />
        </p>
        <p className={styles.Description}>
          <Trans
            id="Monitor live transactions made on the CONUN Private Blockchain network
          with CONUN Private Blockchain Explorer. CONUN Explorer is a block
          monitoring and data service platform where you can view Blockchain
          transactions, block data inquiries, and related charts simultaneously."
          />
        </p>
        <div className={styles.DiagramContainer}>
          <ChartBCE />
        </div>
      </div>
    </div>
  );
}
export default Footer;
