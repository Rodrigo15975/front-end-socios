// Valores iniciales del valor del input(name)
export interface InitialValuesInputsActividad {
  actividad: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormularioActividad {
  actividades: InitialValuesInputsActividad[];
}

// Valores iniciales del array
export const initialArrayFormularioActividad: InitialValuesArrayFormularioActividad =
  {
    actividades: [
      {
        actividad: "",
      },
    ],
  };

// agregar Nuevo formulario
export const initialValuesPushArrayActividad: InitialValuesInputsActividad = {
  actividad: "",
};
