export type FunctionalityCargo = {
  setOpenFormCargo: () => void;
};

export interface StoreCargo extends FunctionalityCargo {
  openFormCargo: boolean;
}
