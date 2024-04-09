// Valores iniciales del valor del input(name)
export interface InitialValuesInputsCargo {
  cargo: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormularioCargo {
  cargos: InitialValuesInputsCargo[];
}

// Valores iniciales del array
export const initialArrayFormularioCargo: InitialValuesArrayFormularioCargo = {
  cargos: [
    {
      cargo: "",
    },
  ],
};

// agregar Nuevo formulario
export const initialValuesPushArrayCargo: InitialValuesInputsCargo = {
  cargo: "",
};
