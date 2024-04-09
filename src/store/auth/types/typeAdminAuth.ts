export type FunctionalityAuth = {
  setIsAuth: () => void;
};

export interface StoreAuth extends FunctionalityAuth {
  isAuth: boolean;
}
