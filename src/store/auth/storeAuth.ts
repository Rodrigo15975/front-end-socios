import { create } from "zustand";
import { StoreAuth } from "./types/typeAdminAuth";

const storeAuth = create<StoreAuth>((set) => ({
  isLoadingAuth: false,
  isAuth: false,
  setIsAuth(auth) {
    set({ isAuth: auth });
  },
}));

export default storeAuth;
