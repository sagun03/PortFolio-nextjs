import { atom } from "recoil";

const getInitialTab = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};

export const tabsState = atom<{
  isLoading: boolean;
  activeTab: string | undefined;
}>({
  key: "tabsState",
  default: {
    isLoading: false,
    activeTab: getInitialTab(),
  },
});
