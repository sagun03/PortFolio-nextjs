import {selector} from "recoil";
import { tabsState } from "../atoms/tabs";

export const isTabsLoading = selector({
    key: 'isTabsLoadingSTate',
    get: ({get}) => {
        const state = get(tabsState);
        return state.isLoading;
    }
})

export const getActiveTab = selector({
    key: 'activeTab',
    get: ({get}) => {
        const state = get(tabsState);
        return state.activeTab;
    }
})