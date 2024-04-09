import { create } from "zustand";
import { StoreConfiguration } from "./types/typeConfiguration";


// Ya existe el store, cambiar estos valores porq ueno hay modal en el
// configuracion para registro
const storeConfiguration = create<StoreConfiguration>((set, get) => ({
  openFormConfiguration: false,
  setOpenFormConfiguration() {
    const { openFormConfiguration } = get();
    set({ openFormConfiguration: !openFormConfiguration });
  },
}));

export default storeConfiguration;
