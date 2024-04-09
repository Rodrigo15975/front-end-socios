export type FunctionalityUsuario = {
  setOpenFormUsuario: () => void;
};

export interface StoreUsuario extends FunctionalityUsuario {
  openFormUsuario: boolean;
}
