import { create } from "zustand";
import { StoreCargo } from "./types/typeCargo";

const storeCargo = create<StoreCargo>((set, get) => ({
  openFormCargo: false,
  setOpenFormCargo() {
    const { openFormCargo } = get();
    set({ openFormCargo: !openFormCargo });
  },
}));

export default storeCargo;
