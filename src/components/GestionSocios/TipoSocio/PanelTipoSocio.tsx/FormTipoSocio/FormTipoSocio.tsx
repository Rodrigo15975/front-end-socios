import AppFormularioTipoSocio from "./FormularioRegistroTipoSocio/AppFormularioRegistroTipoSocio";
import TitleFormTipoSocio from "./TitleFormTipoSocio";

const FormTipoSocio = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border shadow-sm bg-bg_five/20 p-2 rounded-md">
          <TitleFormTipoSocio />
        </div>
        {/* Formulario modal */}
        <AppFormularioTipoSocio />
      </div>
    </>
  );
};

export default FormTipoSocio;
