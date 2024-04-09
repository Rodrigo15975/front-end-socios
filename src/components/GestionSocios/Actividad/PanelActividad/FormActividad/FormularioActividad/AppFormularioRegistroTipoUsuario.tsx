import ButtonsFormularioTipoUsuario from "@/components/GestionUsuarios/TipoUsuario/PanelTipoUsuario/FormTipoUsuario/FormularioRegistroTipoUsuario/ButtonsFormularioTipoUsuario";
import FormularioRegistroTipoUsuario from "@/components/GestionUsuarios/TipoUsuario/PanelTipoUsuario/FormTipoUsuario/FormularioRegistroTipoUsuario/FormularioRegistroTipoUsuario";
import {
  initialArrayFormularioTipoUsuarios,
  initialValuesPushArray,
} from "@/components/GestionUsuarios/TipoUsuario/PanelTipoUsuario/FormTipoUsuario/FormularioRegistroTipoUsuario/inputsTipoUsuario/inputsTipoUsuario";
import { initialValuesArrayFormularioTipoUsuarioSchema } from "@/components/GestionUsuarios/TipoUsuario/PanelTipoUsuario/FormTipoUsuario/FormularioRegistroTipoUsuario/validationSchemRegistroTipoUsuario/validationSchemRegistroTipoUsuario";
import { FieldArray, Form, Formik } from "formik";

const AppFormularioRegistroTipoUsuario = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioTipoUsuarios}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={initialValuesArrayFormularioTipoUsuarioSchema}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="tipos_usuarios">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroTipoUsuario
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioTipoUsuario
                      onClick={() => push(initialValuesPushArray)}
                    />
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppFormularioRegistroTipoUsuario;
