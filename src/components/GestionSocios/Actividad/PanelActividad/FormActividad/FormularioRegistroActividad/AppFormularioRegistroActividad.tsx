import { FieldArray, Form, Formik } from "formik";
import ButtonsFormularioActividad from "./ButtonsFormularioActividad";
import FormularioRegistroActividad from "./FormularioRegistroActividad";
import {
  initialArrayFormularioActividad,
  initialValuesPushArrayActividad,
} from "./inputsActividad/inputsActividad";
import { validationSchemaActividad } from "./validationSchemaActividad/validationSchemaActividad";

const AppFormularioActividad = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioActividad}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchemaActividad}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="actividades">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroActividad
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioActividad
                      onClick={() => push(initialValuesPushArrayActividad)}
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

export default AppFormularioActividad;
