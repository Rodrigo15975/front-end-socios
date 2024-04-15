export type FunctionalityCargo = {
  setOpenFormCargo: () => void;
  setOpenEditFormCargo: () => void;
};

export interface StoreCargo extends FunctionalityCargo {
  openFormCargo: boolean;
  openEditFormCargo: boolean;
}
