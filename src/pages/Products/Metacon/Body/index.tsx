import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";
import Text from "@/components/Text";

function Body() {
  return (
    <div>
      <div></div>
      <div>
        <Caption
          title={<Trans id="a cryptocurrency wallet for Google Chrome!" />}
        />
        <Text
          description={
            <Trans id="It also provides a decentralized swapping service. Any transactions made on METACON will be peer-to-peer without an intermediator. All transaction information is transparent to the public, so anyone can see and check the transaction history updated live on CONSCAN. If you already have an Ethereum wallet, you can link it to METACON and use it. Of course, you can create a new wallet here." />
          }
        />
        <Text
          description={
            <Trans id="Download now and enjoy the various services of CONUN through METACON in a fast and secure environment." />
          }
        />
      </div>
    </div>
  );
}
export default Body;
