import { create } from "zustand";
import { StoreGetDataRuc } from "./types/typesGetDataRuc";

const storeGetDataRuc = create<StoreGetDataRuc>((set) => ({
  updateDataRuc(dataRuc) {
    set({ dataRuc });
  },
  clearDataRuc() {
    set({
      dataRuc: {
        departamento: "",
        direccion: "",
        distrito: "",
        numeroDocumento: "",
        provincia: "",
        razonSocial: "",
      },
    });
  },
  dataRuc: {
    departamento: "",
    direccion: "",
    distrito: "",
    numeroDocumento: "",
    provincia: "",
    razonSocial: "",
  },
}));
export default storeGetDataRuc;
