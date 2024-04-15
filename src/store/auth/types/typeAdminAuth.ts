export type FunctionalityAuth = {
  setIsAuth: (auth: boolean) => void;
};

export interface StoreAuth extends FunctionalityAuth {
  isAuth: boolean;
}
