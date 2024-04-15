export type FunctionalityTipoUsuario = {
  setOpenFormTipoUsuario: () => void;
  setOpenEditFormTipoUsuario: () => void;
};

export interface StoreTipoUsuario extends FunctionalityTipoUsuario {
  openFormTipoUsuario: boolean;
  openEditFormTipoUsuario: boolean;
}
