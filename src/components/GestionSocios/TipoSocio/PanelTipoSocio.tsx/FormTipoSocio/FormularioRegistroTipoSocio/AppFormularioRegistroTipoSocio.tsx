import { FieldArray, Form, Formik } from "formik";
import {
  initialArrayFormularioTipoSocio,
  initialValuesPushArrayTipoSocio,
} from "./inputsTipoSocio/inputsTipoSocio";
import { validationSchemaTipoSocio } from "./validationSchemaTipoSocio/validationSchemaActividad";
import FormularioRegistroTipoSocio from "./FormularioRegistroTipoSocio";
import ButtonsFormularioTipoSocio from "./ButtonsFormularioTipoSocio";

const AppFormularioTipoSocio = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioTipoSocio}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchemaTipoSocio}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="socios">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroTipoSocio
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioTipoSocio
                      onClick={() => push(initialValuesPushArrayTipoSocio)}
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

export default AppFormularioTipoSocio;
