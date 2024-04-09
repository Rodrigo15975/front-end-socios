// Valores iniciales del valor del input(name)
export interface InitialValuesInputsTipoUsuario {
  tipo_usuario: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormularioTipoUsuario {
  tipos_usuarios: InitialValuesInputsTipoUsuario[];
}

// Valores iniciales del array
export const initialArrayFormularioTipoUsuarios: InitialValuesArrayFormularioTipoUsuario =
  {
    tipos_usuarios: [
      {
        tipo_usuario: "",
      },
    ],
  };

// agregar Nuevo formulario
export const initialValuesPushArray: InitialValuesInputsTipoUsuario = {
  tipo_usuario: "",
};
