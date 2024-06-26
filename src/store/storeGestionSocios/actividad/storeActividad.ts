import { create } from "zustand";
import { StoreActividad } from "./types/typeActividad";

const storeActividad = create<StoreActividad>((set, get) => ({
  openFormActividad: false,
  setOpenFormActividad() {
    const { openFormActividad } = get();
    set({ openFormActividad: !openFormActividad });
  },
  openEditFormActividad: false,
  setOpenEditFormActividad() {
    const { openEditFormActividad } = get();
    set({ openEditFormActividad: !openEditFormActividad });
  },
}));

export default storeActividad;
