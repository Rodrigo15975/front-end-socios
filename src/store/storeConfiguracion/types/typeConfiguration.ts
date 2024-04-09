export type FunctionalitConfiguracion = {
  setOpenFormConfiguration: () => void;
};

export interface StoreConfiguration extends FunctionalitConfiguracion {
  openFormConfiguration: boolean;
}
