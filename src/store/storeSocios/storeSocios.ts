import { create } from "zustand";
import { StoreSocio } from "./types/typesSocios";

const storeSocio = create<StoreSocio>((set, get) => ({
  openEditFormSocio: false,
  setOpenEditFormSocio() {
    const { openEditFormSocio } = get();
    set({ openEditFormSocio: !openEditFormSocio });
  },
  openDeleteFormSocio: false,
  setOpeDeleteFormSocio() {
    const { openDeleteFormSocio } = get();
    set({ openDeleteFormSocio: !openDeleteFormSocio });
  },
}));

export default storeSocio;
