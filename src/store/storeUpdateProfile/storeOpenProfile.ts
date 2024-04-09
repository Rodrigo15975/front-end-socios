import { create } from "zustand";
import { StoreOpenProfile } from "./types/typeStoreProfile";

const storeOpenProfile = create<StoreOpenProfile>((set, get) => ({
  openProfile: false,
  setOpenProfile() {
    const { openProfile } = get();
    set({ openProfile: !openProfile });
  },
}));

export default storeOpenProfile;
