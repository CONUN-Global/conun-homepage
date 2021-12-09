import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";
import Text from "@/components/Text";

import SideChain from "@/assets/icons/side_chain.svg";
import Anonymous from "@/assets/icons/anonymous.svg";
import Fees from "@/assets/icons/fees.svg";
import Immutable from "@/assets/icons/immutable.svg";
import RuleModification from "@/assets/icons/rule_modification.svg";
import Security from "@/assets/icons/security.svg";

import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroContainer}>
        <div className={styles.Card}>
          <div className={styles.TextContainer}>
            <Caption
              className={styles.Caption}
              headColor="sky"
              textSize="large"
              header={<Trans id="Conun Private Blockchain Network" />}
              title={<Trans id="INTRODUCTION" />}
            />
            <Text
              description={
                <Trans id="CONUN Private Blockchain Network (CPBN) has the ability to give users a more affordable, secure and faster network, with the all same capabilities as the Ethereum Network. This is because our network runs alongside the Ethereum main blockchain." />
              }
            />
          </div>
          <div className={styles.DiagramContainer}>
            <SideChain />
          </div>
        </div>

        <div className={styles.IconContainer}>
          <Caption title={<Trans id="Benefits" />} className={styles.Title} />

          <div className={styles.Icons}>
            <div>
              <Immutable className={styles.Icon} />
              <p>
                <Trans id="immutable" />
              </p>
            </div>

            <div>
              <Security className={styles.Icon} />
              <p>
                <Trans id="secure" />
              </p>
            </div>
            <div>
              <Anonymous className={styles.Icon} />
              <p>
                <Trans id="anonymous" />
              </p>
            </div>
            <div>
              <Fees className={styles.Icon} />
              <p>
                <Trans id="reduced fees" />
              </p>
            </div>
            <div>
              <RuleModification className={styles.Icon} />
              <p>
                <Trans id="rule modification" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
