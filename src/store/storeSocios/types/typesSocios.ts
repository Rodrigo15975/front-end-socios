export type FunctionalitySocio = {
  setOpenEditFormSocio: () => void;
  setOpeDeleteFormSocio: () => void;
};

export interface StoreSocio extends FunctionalitySocio {
  openEditFormSocio: boolean;
  openDeleteFormSocio: boolean;
}
