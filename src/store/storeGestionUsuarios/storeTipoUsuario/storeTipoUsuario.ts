import { create } from "zustand";
import { StoreTipoUsuario } from "./types/typeStoreTipoUsuario";

const storeTipoUsuario = create<StoreTipoUsuario>((set, get) => ({
  openFormTipoUsuario: false,
  openEditFormTipoUsuario: false,
  setOpenFormTipoUsuario() {
    const { openFormTipoUsuario } = get();
    set({ openFormTipoUsuario: !openFormTipoUsuario });
  },
  setOpenEditFormTipoUsuario() {
    const { openEditFormTipoUsuario } = get();
    set({ openEditFormTipoUsuario: !openEditFormTipoUsuario });
  },
}));

export default storeTipoUsuario;
