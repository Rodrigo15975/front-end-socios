import { create } from "zustand";
import { StoreTipoUsuario } from "./types/typeStoreTipoUsuario";

const storeTipoUsuario = create<StoreTipoUsuario>((set, get) => ({
  openFormTipoUsuario: false,
  setOpenFormTipoUsuario() {
    const { openFormTipoUsuario } = get();
    set({ openFormTipoUsuario: !openFormTipoUsuario });
  },
}));

export default storeTipoUsuario;
