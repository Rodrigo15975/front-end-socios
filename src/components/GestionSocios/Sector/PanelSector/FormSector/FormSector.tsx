import AppFormularioSector from "./FormularioRegistroSector/AppFormularioRegistroSector";
import TitleFormSector from "./TitleFormSector";

const FormSector = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border shadow-sm bg-bg_five/20 p-2 rounded-md">
          <TitleFormSector />
        </div>
        {/* Formulario */}
        <AppFormularioSector />
      </div>
    </>
  );
};

export default FormSector;
