import Youtube from "@/assets/socials/youtube.svg";
import Facebook from "@/assets/socials/facebook.svg";
import Linkedin from "@/assets/socials/linkedin.svg";
import Github from "@/assets/socials/github.svg";
import Discord from "@/assets/socials/discord.svg";
import Medium from "@/assets/socials/medium.svg";

const iconStyles = {
  width: "28px",
};

export const LINKS_ITEMS = [
  {
    icon: <Youtube style={iconStyles} />,
    link: "https://www.youtube.com/channel/UCVbpETcXaPRZkL2HACUXOsA",
  },
  {
    icon: <Facebook style={iconStyles} />,
    link: "https://www.facebook.com/conunglobal",
  },
  {
    icon: <Linkedin style={iconStyles} />,
    link: "https://www.linkedin.com/company/conun-global",
  },
  {
    icon: <Github style={iconStyles} />,
    link: "https://github.com/CONUN-Global/",
  },
  {
    icon: <Discord style={iconStyles} />,
    link: "https://discord.gg/RnzB2tjAW6",
  },
  {
    icon: <Medium style={iconStyles} />,
    link: "https://medium.com/conun-korea",
  },
];
