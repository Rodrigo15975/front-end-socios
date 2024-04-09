export type FunctionalityTipoSocio = {
  setOpenFormTipoSocio: () => void;
};

export interface StoreTipoSocio extends FunctionalityTipoSocio {
  openFormTipoSocio: boolean;
}
