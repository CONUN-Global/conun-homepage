import { Trans } from "@lingui/macro";

import EcosystemIcon from "@/assets/icons/ecosystem_icon.svg";
import GiveMicrochip from "@/assets/icons/give_microchip.svg";
import GetMicrochip from "@/assets/icons/earn_microchip.svg";

export const CARD_CONTENT = [
  {
    title: <Trans id="Get Power By Conun" />,
    description: (
      <Trans id="Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably." />
    ),
    image: <GetMicrochip />,
  },
  {
    title: <Trans id="Join Our Ecosystem" />,
    description: (
      <Trans id="Become part of the CONUN network and you can benefit from our current and future blockchain-based projects." />
    ),
    image: <EcosystemIcon />,
  },
  {
    title: <Trans id="Give Power to Earn" />,
    description: (
      <Trans id="By sharing your personal computing resources you become part of a P2P network where earning is easy." />
    ),
    image: <GiveMicrochip />,
  },
];
