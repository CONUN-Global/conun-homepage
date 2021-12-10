import { Trans } from "@lingui/macro";

import Anonymous from "@/assets/icons/anonymous.svg";
import Fees from "@/assets/icons/fees.svg";
import Immutable from "@/assets/icons/immutable.svg";
import RuleModification from "@/assets/icons/rule_modification.svg";
import Security from "@/assets/icons/security.svg";

export const BenefitsIcons = [
  {
    icon: <Immutable styles={{ width: "80%" }} />,
    text: <Trans id="immutable" />,
  },
  {
    icon: <Security styles={{ width: "80%" }} />,
    text: <Trans id="secure" />,
  },
  {
    icon: <Anonymous styles={{ width: "80%" }} />,
    text: <Trans id="anonymous" />,
  },
  {
    icon: <Fees styles={{ width: "80%" }} />,
    text: <Trans id="reduced fees" />,
  },
  {
    icon: <RuleModification styles={{ width: "80%" }} />,
    text: <Trans id="rule modification" />,
  },
];
