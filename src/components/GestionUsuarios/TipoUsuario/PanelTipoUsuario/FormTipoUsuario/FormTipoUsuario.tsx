import AppFormularioRegistroTipoUsuario from "./FormularioRegistroTipoUsuario/AppFormularioRegistroTipoUsuario";
import TitleFormTipoUsuario from "./TitleFormTipoUsuario";

const FormTipoUsuario = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border shadow-sm bg-bg_five/20 p-2 rounded-md">
          <TitleFormTipoUsuario />
        </div>
        {/* Formulario modal */}
        <AppFormularioRegistroTipoUsuario />
      </div>
    </>
  );
};

export default FormTipoUsuario;
