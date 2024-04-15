import { create } from "zustand";
import { StoreTipoSocio } from "./types/typeTipoSocios";

const storeTipoSocio = create<StoreTipoSocio>((set, get) => ({
  openFormTipoSocio: false,
  setOpenFormTipoSocio() {
    const { openFormTipoSocio } = get();
    set({ openFormTipoSocio: !openFormTipoSocio });
  },
  openEditFormTipoSocio: false,
  setOpenEditFormTipoSocio() {
    const { openEditFormTipoSocio } = get();
    set({ openEditFormTipoSocio: !openEditFormTipoSocio });
  },
}));

export default storeTipoSocio;
