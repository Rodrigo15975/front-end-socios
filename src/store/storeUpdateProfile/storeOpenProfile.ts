import { create } from "zustand";
import { StoreOpenProfile } from "./types/typeStoreProfile";

const storeOpenProfile = create<StoreOpenProfile>((set, get) => ({
  openProfile: false,
  setOpenProfile() {
    const { openProfile } = get();
    set({ openProfile: !openProfile });
  },
  openEditProfile: false,
  setOpenEditProfile() {
    const { openEditProfile } = get();
    set({ openEditProfile: !openEditProfile });
  },
}));

export default storeOpenProfile;
