import { create } from "zustand";
import { StoreUsuario } from "./types/typeUsuario";

const storeUsuario = create<StoreUsuario>((set, get) => ({
  openFormUsuario: false,
  setOpenFormUsuario() {
    const { openFormUsuario } = get();
    set({ openFormUsuario: !openFormUsuario });
  },
}));

export default storeUsuario;
