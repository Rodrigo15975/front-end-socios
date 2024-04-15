export type FunctionalityUsuario = {
  setOpenEditFormUsuario: () => void;
  setOpeDeleteFormUsuario: () => void;
};

export interface StoreUsuario extends FunctionalityUsuario {
  openEditFormUsuario: boolean;
  openDeleteFormUsuario: boolean;
}
