import { ContributionWeek } from "@/app/components/ContributionGraph";
import { atom } from "recoil";

export const contributionState = atom<{ contributions: ContributionWeek[]}>({
  key: "contributionState",
  default: {
    contributions: []
  },
});
