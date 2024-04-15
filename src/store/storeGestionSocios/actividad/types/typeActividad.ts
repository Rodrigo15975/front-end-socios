export type FunctionalityActividad = {
  setOpenFormActividad: () => void;
  setOpenEditFormActividad: () => void;
};

export interface StoreActividad extends FunctionalityActividad {
  openEditFormActividad: boolean;
  openFormActividad: boolean;
}
