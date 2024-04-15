export type DataRuc = {
  razonSocial: string;
  departamento: string;
  direccion: string;
  distrito: string;
  numeroDocumento: string;
  provincia: string;
};

interface FuncionalityStoreGetDataRuc {
  updateDataRuc: (dataRuc: DataRuc) => void;
  clearDataRuc: () => void;
}

export interface StoreGetDataRuc extends FuncionalityStoreGetDataRuc {
  dataRuc: DataRuc;
}
