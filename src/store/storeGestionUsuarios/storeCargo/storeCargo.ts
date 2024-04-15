import { create } from "zustand";
import { StoreCargo } from "./types/typeCargo";

const storeCargo = create<StoreCargo>((set, get) => ({
  openFormCargo: false,
  setOpenFormCargo() {
    const { openFormCargo } = get();
    set({ openFormCargo: !openFormCargo });
  },
  openEditFormCargo: false,
  setOpenEditFormCargo() {
    const { openEditFormCargo } = get();
    set({ openEditFormCargo: !openEditFormCargo });
  },
}));

export default storeCargo;
