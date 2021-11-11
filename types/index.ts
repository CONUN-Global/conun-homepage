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
