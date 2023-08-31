import React from 'react';
import { create } from 'zustand'
import axios from 'axios'

import OnboardingServices from "../services/onboarding_services/onboarding.services";
import { LogIn } from "../models/onboarding_user.models";


export type SubItemsProps = {
    buttonHeader: string,
    items: ItemProps[],
}

export type ItemProps = {
    itemName: string,
    itemPath: string,
}

interface toastStore {
    isLoginToastShowing: boolean;
    showLoginToast: () => void;
}

interface currentToggeleStore {
    currentToggle: string;
    expandedCollapse: boolean;
    setCurrentToggle: (name: string) => void;
    toggleExpand: () => void;
    expandBig: () => void;
    expandSmall: () => void;
}

interface SidebarStore {
    isShowing: boolean;
    showSub: () => void;
    hideSub: () => void;
    toggleSub: () => void;
    activeSidebar: string;
    setActiveSidear: (name: string) => void;
    subItems: ItemProps[]
    setSubItems: (items: ItemProps[]) => void;
}
interface SidebarStore1 {
    isShowing1: boolean;
    showSub: () => void;
    hideSub: () => void;
    toggleSub: () => void;
    activeSidebar: string;
    setActiveSidear: (name: string) => void;
    subItems: ItemProps[]
    setSubItems: (items: ItemProps[]) => void;
}

export const useSidebarStore = create<SidebarStore>()((set) => ({
    isShowing: false,
    showSub: () => set(() => ({ isShowing: true })),
    hideSub: () => set(() => ({ isShowing: false })),
    toggleSub: () => set((state) => ({ isShowing: !state.isShowing })),
    subItems: [],
    setSubItems: (item) => set((state) => ({ subItems: item })),
    activeSidebar: '',
    setActiveSidear: (name) => set((state) => ({ activeSidebar: name }))
}))
export const useSidebarStore1 = create<SidebarStore1>()((set) => ({
    isShowing1: false,
    showSub: () => set(() => ({ isShowing1: true })),
    hideSub: () => set(() => ({ isShowing1: false })),
    toggleSub: () => set((state) => ({ isShowing1: !state.isShowing1 })),
    subItems: [],
    setSubItems: (item) => set((state) => ({ subItems: item })),
    activeSidebar: '',
    setActiveSidear: (name) => set((state) => ({ activeSidebar: name }))
}))

export const useToastStore = create<toastStore>()((set) => ({
    isLoginToastShowing: false,
    showLoginToast: () => set((state) => ({ isLoginToastShowing: true }))
}))

export const useCurrentToggleStore = create<currentToggeleStore>()((set) => ({
    currentToggle: '',
    expandedCollapse: false,
    setCurrentToggle: (name) => set((state) => ({ currentToggle: name })),
    toggleExpand: () => set((state) => ({ expandedCollapse: !state.expandedCollapse })),
    expandBig: () => set(() => ({ expandedCollapse: true })),
    expandSmall: () => set(() => ({ expandedCollapse: false }))

}))

// export const useLoginStore = create((set) => ({
//     data: [],
//     fetchData: async (postData: LogIn) => {
//         try {
//             const response = await OnboardingServices.signIn(data as LogIn);
//             if (response && response.status === 200) {
//               // if (response.data.status === "OK") {
//               CookieManager.setCookie("jwt", response.response.Jwttoken, 2);
//               router.push("/student/dashboard");
//               console.log(response.status);
//               console.log(response.response);
//             } else {
//               // toast.error('An error has occurred please try again later')
      
//               return;
//               // setIsLoading(false);
//             }
//             console.log(response);
//           } catch (e: any) {
//             console.log(e);
//             // toast.error(e)
//             // setIsLoading(false);
//           }
//       },
//   }));
  