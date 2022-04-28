export type Locales = {
  value: "en" | "ko";
  label: "English" | "한국어";
};

export type Network = {
  value: "main" | "test";
  label: "Main net is live" | "Test net is live";
};
export type AppState = {
  currentLocale: Locales;
  setCurrentLocale: (locale: Locales) => void;
  currentNetwork: Network;
  setCurrentNetwork: (network: Network) => void;
  activeSlide: number;
  setActiveSlide: (num: number) => void;
};

export type YearObj = {
  month: JSX.Element;
  title: JSX.Element;
  subtitle: JSX.Element;
};
export type YearProps = {
  [key: string]: YearObj[];
};

export type DownloadMenu = {
  osName: string;
  icon: React.ReactNode;
  links: string[];
};

export type NewsSource = "youtube" | "xangle" | "discord" | "github" | "medium";

// NewsData type will change when API is connected
export type NewsDataObj = {
  id: number;
  title: string;
  date: string;
  url: string;
  source: string;
  caption: string;
  author: string;
  isAnnouncement: boolean;
  isHowTo: boolean;
  thumbnail?: string;
};
export type StringKeyObj = {
  [key: string]: string;
};

export type Article = {
  article: {
    description: string;
    link: string;
    originallink: string;
    pubDate: string;
    title: string;
  };
};
