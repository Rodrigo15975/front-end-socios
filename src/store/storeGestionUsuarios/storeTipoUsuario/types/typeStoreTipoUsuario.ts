export type FunctionalityTipoUsuario = {
  setOpenFormTipoUsuario: () => void;
};

export interface StoreTipoUsuario extends FunctionalityTipoUsuario {
  openFormTipoUsuario: boolean;
}
