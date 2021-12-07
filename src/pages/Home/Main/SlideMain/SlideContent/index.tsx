import { Trans } from "@lingui/macro";

import DSCSlide from "@/assets/icons/dsc_slide.svg";
import DriveSlide from "@/assets/icons/drive_slide.svg";
import WalletSlide from "@/assets/icons/wallet_slide.svg";
import CPBNSlide from "@/assets/icons/cpbn_slide.svg";
import DownloadHeaderIcon from "@/assets/icons/download_header.svg";

export const MAIN_PAGES = [
  {
    title: <Trans id="Your Resource for high power computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    image: <DSCSlide />,
    btnMsg: <Trans id="Lear More" />,
    link: "/products/dsc",
  },

  {
    title: <Trans id="A FAST, SECURE, and AFFORDABLE BLOCKCHAIN" />,
    description: (
      <Trans id="CONUN’s Private Blockchain Network is an answer to the limitations that come with using a public blockchain. A private blockchain allows us to modify and set our own rules, all while providing users with a faster, secure and more affordable Blockchain." />
    ),
    image: <CPBNSlide />,
    btnMsg: <Trans id="Lear More" />,
    link: "/products/cpbn",
  },
  {
    title: <Trans id="Explore, Share, and Earn with CONUN Drive" />,
    description: (
      <Trans id="CONUN Drive is a unique desktop platform that connects and allows users to share digital assets worldwide. It is a place to share and explore all your assets quickly and conveniently." />
    ),
    image: <DriveSlide />,
    btnMsg: <Trans id="Learn More" />,
    link: "/products/drive",
  },
  {
    title: <Trans id="Fast and secure cryptocurrency wallet" />,
    description: (
      <Trans id="CONUN Manager is CONUN’s cryptocurrency wallet. With our wallet you can access the products within our ecosystem as well as swap and transfer cryptocurrency quickly and securely. Our wallet seamlessly incorporates Ethereum wallets, access with one easy download." />
    ),
    image: <WalletSlide />,
    btnMsg: <Trans id="Learn More" />,
    link: "/products/metacon",
  },
  {
    title: <Trans id="YOUR RESOURCE FOR High power computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    image: <DownloadHeaderIcon style={{ height: "100%" }} />,
    link: "",
  },
];
