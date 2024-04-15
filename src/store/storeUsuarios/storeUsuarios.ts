import { create } from "zustand";
import { StoreUsuario } from "./types/typeUsuario";

const storeUsuario = create<StoreUsuario>((set, get) => ({
  openEditFormUsuario: false,
  setOpenEditFormUsuario() {
    const { openEditFormUsuario } = get();
    set({ openEditFormUsuario: !openEditFormUsuario });
  },
  openDeleteFormUsuario: false,
  setOpeDeleteFormUsuario() {
    const { openDeleteFormUsuario } = get();
    set({ openDeleteFormUsuario: !openDeleteFormUsuario });
  },
}));

export default storeUsuario;
