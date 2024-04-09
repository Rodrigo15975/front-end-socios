// Valores iniciales del valor del input(name)
export interface InitialValuesInputsTipoSocio {
  socio: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormularioTipoSocio {
  socios: InitialValuesInputsTipoSocio[];
}

// Valores iniciales del array
export const initialArrayFormularioTipoSocio: InitialValuesArrayFormularioTipoSocio =
  {
    socios: [
      {
        socio: "",
      },
    ],
  };

// agregar Nuevo formulario
export const initialValuesPushArrayTipoSocio: InitialValuesInputsTipoSocio = {
  socio: "",
};
