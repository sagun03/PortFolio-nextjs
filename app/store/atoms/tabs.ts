import { atom } from "recoil";

const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname.split("/").slice(1).shift();
  }
  return "";
};

export const tabsState = atom<{
  isLoading: boolean;
  activeTab: string | undefined;
}>({
  key: "tabsState",
  default: {
    isLoading: false,
    activeTab: getPath(),
  },
});
