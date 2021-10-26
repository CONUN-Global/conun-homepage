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

export type Pages = {
  title: React.ReactNode;
  description: React.ReactNode;
  btnMsg: React.ReactNode;
};