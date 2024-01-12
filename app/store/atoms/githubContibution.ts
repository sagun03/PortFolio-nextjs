"use client"
import { ContributionWeek } from "@/app/components/ContributionGraph";
import { atom } from "recoil";
import { persistAtom } from './recoilPersist';


export const [contributionState, persistedContributionState] = persistAtom<{ contributions: ContributionWeek[] }>(
  'contributionState',
  {
    contributions: [],
  }
);
