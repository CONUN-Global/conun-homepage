import create from "zustand";
type Locale = "en" | "ko";
type Network = {
  value: "main" | "test";
  label: "Main net is live" | "Test net is live";
};
type AppState = {
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
  currentNetwork: Network;
  setCurrentNetwork: (network: Network) => void;
};
const useStore = create<AppState>((set) => ({
  currentLocale: "en",
  setCurrentLocale: (locale) => set({ currentLocale: locale }),
  currentNetwork: {
    value: "main",
    label: "Main net is live",
  },
  setCurrentNetwork: (network) =>
    set({
      currentNetwork: network,
    }),
}));

export default useStore;
