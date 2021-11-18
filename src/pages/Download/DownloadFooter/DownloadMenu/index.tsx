import { DownloadMenu } from "@/types/index";
import LinuxIcon from "@/assets/icons/linux_icon.svg";
import AppleIcon from "@/assets/icons/apple_icon.svg";
import WindowsIcon from "@/assets/icons/windows_icon.svg";

export const DOWNLOADS_MENU: DownloadMenu[] = [
  {
    osName: "Windows OS",
    icon: <WindowsIcon style={{ height: "93px" }} />,
    links: [
      "metacon",
      "https://github.com/CONUN-Global/conun-drive/releases/download/v1.0.2-beta/Conun.Drive.Setup.1.0.2-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/Conun.Manager.Setup.1.0.1-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/manager-drive-win.zip",
    ],
  },
  {
    osName: "Linux OS",
    icon: <LinuxIcon />,
    links: [
      "metacon",
      "https://github.com/CONUN-Global/conun-drive/releases/download/v1.0.2-beta/Conun.Drive.Setup.1.0.2-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/Conun.Manager.Setup.1.0.1-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/manager-drive-win.zip",
    ],
  },
  {
    osName: "Mac OS",
    icon: <AppleIcon />,
    links: [
      "metacon",
      "https://github.com/CONUN-Global/conun-drive/releases/download/v1.0.2-beta/Conun.Drive.Setup.1.0.2-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/Conun.Manager.Setup.1.0.1-beta.exe",
      "https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v1.0.1-beta/manager-drive-win.zip",
    ],
  },
];
