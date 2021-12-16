import create from "zustand";
import { AppState } from "@/types/index";
import detectLocale from "@/helpers/localeDetector";

const lang = detectLocale();
const getLabels = () => {
  if (lang === "ko") {
    return "한국어";
  } else {
    return "English";
  }
};

const useStore = create<AppState>((set) => ({
  currentLocale: {
    value: lang,
    label: getLabels(),
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
