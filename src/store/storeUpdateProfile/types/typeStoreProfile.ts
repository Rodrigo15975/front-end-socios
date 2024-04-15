type FuncionalityProfile = {
  setOpenProfile: () => void;
  setOpenEditProfile: () => void;
};

export type StoreOpenProfile = FuncionalityProfile & {
  openProfile: boolean;
  openEditProfile: boolean;
};
