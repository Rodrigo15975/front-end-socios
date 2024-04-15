import { create } from "zustand";
import { StoreConfiguration } from "./types/typeConfiguration";

// Ya existe el store, cambiar estos valores porq ueno hay modal en el
// configuracion para registro
const storeConfiguration = create<StoreConfiguration>((set, get) => ({
  openFormEditConfiguracion: false,
  openDeleteConfiguracion: false,
  setOpenDeleteConfiguracion() {
    const { openDeleteConfiguracion } = get();
    set({ openDeleteConfiguracion: !openDeleteConfiguracion });
  },
  setOpenFormEditConfiguracion() {
    const { openFormEditConfiguracion } = get();
    set({ openFormEditConfiguracion: !openFormEditConfiguracion });
  },
}));

export default storeConfiguration;
