import { Trans } from "@lingui/macro";

import DriveIcon from "@/assets/icons/drive_icon.svg";
import MetaconWalletIcon from "@/assets/icons/metacon_wallet.svg";

export const PRODUCT_CARD = [
  {
    id: "dirve",
    header: <Trans id="Conun Drive" />,
    image: <DriveIcon />,
    title: <Trans id="EXPLORE AND SHARE" />,
    description: (
      <Trans id="Explore free and private digital assets from users across the globe in The Drive desktop application. The platform is easy. Create a profile, public or anonymous, and explore and share content. Users can also monetize their assets - an easy way to earn while you sleep." />
    ),
    btnMsg: <Trans id="Learn more" />,
    link: "/products/drive",
  },
  {
    id: "metacon-wallet",
    header: <Trans id="Metacon Wallet" />,
    image: <MetaconWalletIcon />,
    title: <Trans id="Metacon Wallet" />,
    description: (
      <Trans id="CONUN’s cryptocurrency wallet gives you access to our coin CONX. You can exchange and swap our coin as well as import your Ethereum wallet." />
    ),
    btnMsg: <Trans id="Learn more" />,
    link: "/products/metacon",
  },
  {
    id: "dsc",
    header: <Trans id="DSC" />,
    image: <MetaconWalletIcon />,
    title: <Trans id="DSC" />,
    description: (
      <Trans id="CONUN's Distributed Computing provides a universal computing network architecture platform that enables distributed processing of personal computers and smartphones connected to the Internet based on desktop grid computing technology." />
    ),
    btnMsg: <Trans id="Learn more" />,
    link: "/products/dsc",
  },
];
