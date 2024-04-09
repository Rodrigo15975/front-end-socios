import { FieldArray, Form, Formik } from "formik";
import ButtonsFormularioTipoUsuario from "./ButtonsFormularioTipoUsuario";
import FormularioRegistroTipoUsuario from "./FormularioRegistroTipoUsuario";
import {
  initialArrayFormularioTipoUsuarios,
  initialValuesPushArray,
} from "./inputsTipoUsuario/inputsTipoUsuario";
import { initialValuesArrayFormularioTipoUsuarioSchema } from "./validationSchemRegistroTipoUsuario/validationSchemRegistroTipoUsuario";

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
