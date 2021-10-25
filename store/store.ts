import create from "zustand";
import { AppState } from "@/types/index";

const useStore = create<AppState>((set) => ({
  currentLocale: {
    value: "en",
    label: "English",
  },
  setCurrentLocale: ({ value, label }) =>
    set({
      currentLocale: {
        value,
        label,
      },
    }),
  currentNetwork: {
    value: "main",
    label: "Main net is live",
  },
  setCurrentNetwork: (network) =>
    set({
      currentNetwork: network,
    }),
  activeSlide: 0,
  setActiveSlide: (num) => set({ activeSlide: num }),
}));

export default useStore;
