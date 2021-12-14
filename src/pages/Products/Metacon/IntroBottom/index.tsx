import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";
import Text from "@/components/Text";
import LinkCustomButton from "@/components/LinkCustomButton";

import WalletAndComputer from "@/assets/icons/wallet_computer.svg";
import styles from "./IntroBottom.module.scss";

function IntroBottom() {
  return (
    <div className={styles.IntroBottom}>
      <div className={styles.MainContainer}>
        <div className={styles.IconContainer}>
          <WalletAndComputer className={styles.WalletAndComputerIcon} />
        </div>
        <div className={styles.TextContainer}>
          <Caption
            title={<Trans id="A Cryptocurrency Wallet for Google Chrome!" />}
          />
          <Text
            description={
              <Trans id="It also provides a decentralized swapping service. Any transactions made on METACON will be peer-to-peer without an intermediator. All transaction information is transparent to the public, so anyone can see and check the transaction history updated live on CONSCAN. If you already have an Ethereum wallet, you can link it to METACON and use it. Of course, you can create a new wallet here." />
            }
          />
          <Text
            className={styles.Description}
            description={
              <Trans id="Download now and enjoy the various services of CONUN through METACON in a fast and secure environment." />
            }
          />
          <div className={styles.LinkButtonContainer}>
            <LinkCustomButton
              path="https://chrome.google.com/webstore/detail/metacon/fpklpminiiiopkibkfamkglecdgfoaia?authuser=1&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNLg6EuaasCIcy616zWE-x8hv-3Vl8PEUo9v-7naXFON7CWTiimiMwRoCUUgQAvD_BwE"
              linkText={<Trans id="Visit the website" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroBottom;
