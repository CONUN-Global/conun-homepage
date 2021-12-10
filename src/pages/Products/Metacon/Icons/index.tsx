import { Trans } from "@lingui/macro";

import Fast from "@/assets/icons/fast.svg";
import Security from "@/assets/icons/security.svg";
import Management from "@/assets/icons/crypto_book.svg";
import Decentralization from "@/assets/icons/decentralization.svg";
import AccessToService from "@/assets/icons/access_finger.svg";

export const BenefitsIcons = [
  {
    icon: <Fast styles={{ width: "80%" }} />,
    text: <Trans id="Fast Transactions" />,
  },
  {
    icon: <Security styles={{ width: "80%" }} />,
    text: <Trans id="Secure Network" />,
  },
  {
    icon: <Management styles={{ width: "80%" }} />,
    text: <Trans id="Easy Manaour of Your Crypto" />,
  },
  {
    icon: <Decentralization styles={{ width: "80%" }} />,
    text: <Trans id="Decentralized Finance" />,
  },
  {
    icon: <AccessToService styles={{ width: "80%" }} />,
    text: <Trans id="Access to Conun's Services" />,
  },
];
