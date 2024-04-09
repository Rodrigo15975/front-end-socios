import AppFormularioActividad from "./FormularioRegistroActividad/AppFormularioRegistroActividad";
import TitleFormActividad from "./TitleFormActividad";

const FormActividad = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border shadow-sm bg-bg_five/20 p-2 rounded-md">
          <TitleFormActividad />
        </div>
        {/* Formulario modal */}
        <AppFormularioActividad />
      </div>
    </>
  );
};

export default FormActividad;
