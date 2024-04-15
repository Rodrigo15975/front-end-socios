import { create } from "zustand";
import { StoreSidebarMobile } from "./types/typeStoreSidebarMobile";

const storeSidebarMobile = create<StoreSidebarMobile>((set, get) => ({
  collapse: false,
  screenMobile: false,
  toggle: false,
  setCollapse() {
    if (window.innerWidth > 1200 && window.innerWidth <= 1510) {
      set({ collapse: true });
    } else {
      set({ collapse: false });
    }
  },
  setScreenMobile() {
    if (window.innerWidth <= 1200) {
      set({ screenMobile: true });
    } else {
      set({ screenMobile: false });
    }
  },
  setToggle() {
    const { toggle } = get();
    set({ toggle: !toggle });
  },
}));

export default storeSidebarMobile;
