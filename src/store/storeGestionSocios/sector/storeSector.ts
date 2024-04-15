import { create } from "zustand";
import { StoreSector } from "./types/typeSector";

const storeSector = create<StoreSector>((set, get) => ({
  openFormSector: false,
  setOpenFormSector() {
    const { openFormSector } = get();
    set({ openFormSector: !openFormSector });
  },
  openEditFormSector: false,
  setOpenEditFormSector() {
    const { openEditFormSector } = get();
    set({ openEditFormSector: !openEditFormSector });
  },
}));

export default storeSector;
