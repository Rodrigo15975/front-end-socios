export type FunctionalityTipoSocio = {
  setOpenFormTipoSocio: () => void;
  setOpenEditFormTipoSocio: () => void;
};

export interface StoreTipoSocio extends FunctionalityTipoSocio {
  openFormTipoSocio: boolean;
  openEditFormTipoSocio: boolean;
}
