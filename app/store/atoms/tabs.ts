import {atom} from "recoil";


export const tabsState = atom<{isLoading: boolean, activeTab: string | undefined}>({
    key: 'tabsState',
    default: {
        isLoading: false,
        activeTab: 'aboutMe'
    }
})