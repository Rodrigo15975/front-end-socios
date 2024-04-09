export type FunctionalityActividad = {
  setOpenFormActividad: () => void;
};

export interface StoreActividad extends FunctionalityActividad {
  openFormActividad: boolean;
}
