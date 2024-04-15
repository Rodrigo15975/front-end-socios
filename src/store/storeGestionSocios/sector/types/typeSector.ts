export type FunctionalitySector = {
  setOpenFormSector: () => void;
  setOpenEditFormSector: () => void;
};

export interface StoreSector extends FunctionalitySector {
  openEditFormSector: boolean;
  openFormSector: boolean;
}
