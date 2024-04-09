import AppFormularioCargo from "./FormularioRegistroCargo/AppFormularioRegistroCargo";
import TitleFormCargo from "./TitleFormCargo";

const FormCargo = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border shadow-sm bg-bg_five/20 p-2 rounded-md">
          <TitleFormCargo />
        </div>
        {/* Formulario modal */}
        <AppFormularioCargo />
      </div>
    </>
  );
};

export default FormCargo;
