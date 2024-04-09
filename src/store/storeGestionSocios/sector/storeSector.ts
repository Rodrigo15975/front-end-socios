import { create } from "zustand";
import { StoreSector } from "./types/typeSector";

const storeSector = create<StoreSector>((set, get) => ({
  openFormSector: false,
  setOpenFormSector() {
    const { openFormSector } = get();
    set({ openFormSector: !openFormSector });
  },
}));

export default storeSector;
