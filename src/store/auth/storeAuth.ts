import { create } from "zustand";
import { StoreAuth } from "./types/typeAdminAuth";

const storeAuth = create<StoreAuth>(() => ({
  setIsAuth() {},
  isLoadingAuth: false,
  isAuth: true,
}));

export default storeAuth;
