import Github from "@/assets/icons/github.svg";

import Discord from "@/assets/icons/discord.svg";
import Xangle from "@/assets/icons/xangle.svg";
import Medium from "@/assets/icons/medium.svg";

export const SOCIAL_LINKS = [
  {
    social: "discord",
    path: "https://discord.com/invite/VvXvQfa3Za",
    icon: <Discord style={{ width: "50%" }} />,
  },
  {
    social: "github",
    path: "https://github.com/CONUN-Global",
    icon: <Github style={{ width: "50%", fill: "black" }} />,
  },
  {
    social: "xangle",
    path: "https://xangle.io/project/CON/key-info",
    icon: <Xangle style={{ width: "100%", fill: "gray" }} />,
  },
  {
    social: "medium",
    path: "https://medium.com/conun-korea",
    icon: <Medium style={{ width: "70%" }} />,
  },
];
