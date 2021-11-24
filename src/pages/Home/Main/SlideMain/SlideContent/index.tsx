import { Trans } from "@lingui/react";

import FirstSlideIcon from "@/assets/icons/slide_first.svg";
import SecondSlideIcon from "@/assets/icons/slide_second.svg";
import ThirdSlideIcon from "@/assets/icons/slide_third.svg";
import DownloadHeaderIcon from "@/assets/icons/download_header.svg";

export const MAIN_PAGES = [
  {
    title: <Trans id="Your Resource for high power computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    image: <FirstSlideIcon />,
    btnMsg: <Trans id="Start Now" />,
  },
  {
    title: <Trans id="Explore, Share, and Earn with CONUN Drive" />,
    description: (
      <Trans id="CONUN Drive is a unique desktop platform that connects and allows users to share digital assets worldwide. It is a place to share explore and any and all assets you quickly and conveniently." />
    ),
    image: <SecondSlideIcon />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Fast and secure cryptocurrency wallet" />,
    description: (
      <Trans id="CONUN Manager is CONUN’s cryptocurrency wallet. With our wallet you can access the products within our ecosystem as well as swap and transfer cryptocurrency quickly and securely. Our wallet seemlessly incorporates Ethereum wallets, access with one easy download." />
    ),
    image: <ThirdSlideIcon />,
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="YOUR RESOURCE FOR High power computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    image: <DownloadHeaderIcon style={{ height: "100%" }} />,
  },
];
