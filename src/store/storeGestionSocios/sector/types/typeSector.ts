export type FunctionalitySector = {
  setOpenFormSector: () => void;
};

export interface StoreSector extends FunctionalitySector {
  openFormSector: boolean;
}
