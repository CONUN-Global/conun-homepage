import { Trans } from "@lingui/macro";
import WebExt from "@/assets/icons/web_ext.svg";
import Drive from "@/assets/icons/drive.svg";
import Wallet from "@/assets/icons/wallet.svg";

export const DOWNLOAD_CONTENT = [
  {
    header: <Trans id="CONUN DRIVE VERSION 1.1" />,
    image: <Drive />,
    title: <Trans id="Decentralized File Sharing Network" />,
    description: (
      <Trans id="Welcome to CONUN DRIVE, a peer-to-peer file sharing service built on our blockchain network. Unlike other peer-to-peer services, the decentralized nature of the blockchain means no-one has control of what files are available to download. Download our desktop application to share, explore, and earn." />
    ),
    btnMsg: <Trans id="Download" />,
  },

  {
    header: <Trans id="CONUN METACON VERSION 1.1" />,
    image: <Wallet />,
    title: <Trans id="A wallet for your crypto" />,
    description: (
      <Trans
        id="CONUN Metacon keeps your existing cryptocurrency wallets together securely. You can easily transfer funds between wallets, as well as get access our own blockchain network, where you can utilize our distributed applications such as CONUN DRIVE. Our blockchain network uses a POA (Proof of Authority) methodology that allows us to provide free transactions*.
"
      />
    ),
    btnMsg: <Trans id="Download" />,
  },
  {
    header: <Trans id="CONUN WEB EXTENSION VERSION 1.1" />,
    image: <WebExt />,
    title: <Trans id="Metacon web extension" />,
    description: (
      <Trans id="The CONUN web extension is an easy route to accessing your crypto funds while online. WIth the same functionality as CONUN Manager you can access your crypto quickly and securely." />
    ),
    btnMsg: <Trans id="Download" />,
  },
];
