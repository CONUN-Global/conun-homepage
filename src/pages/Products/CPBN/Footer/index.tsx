import Link from "next/link";
import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";
import Text from "@/components/Text";

import ChartBCE from "@/assets/icons/charts_BCE.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.DiagramContainer}>
          <ChartBCE />
        </div>
        <div className={styles.Card}>
          <Caption
            headColor="sky"
            header={<Trans id="CPBN’s Block Explorer" />}
            title={<Trans id="CONSCAN (CONUN EXPLORER)" />}
          />

          <Text
            className={styles.Description}
            description={
              <Trans id="Monitor live transactions made on the CONUN Private Blockchain network with CONUN Private Blockchain Explorer. CONUN Explorer is a block monitoring and data service platform where you can view Blockchain transactions, block data inquiries, and related charts simultaneously." />
            }
          />
          <div className={styles.LinkContainer}>
            <Link href="/">
              <a className={styles.Link} rel="noreferrer">
                <Trans id="Visit the website " />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
