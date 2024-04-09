// Valores iniciales del valor del input(name)
export interface InitialValuesInputsSector {
  sector: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormularioSector {
  sectores: InitialValuesInputsSector[];
}

// Valores iniciales del array
export const initialArrayFormularioSector: InitialValuesArrayFormularioSector =
  {
    sectores: [
      {
        sector: "",
      },
    ],
  };

// agregar Nuevo formulario
export const initialValuesPushArraySector: InitialValuesInputsSector = {
  sector: "",
};
