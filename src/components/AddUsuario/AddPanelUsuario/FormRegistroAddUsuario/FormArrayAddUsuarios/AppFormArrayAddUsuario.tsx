import { FieldArray, Form, Formik } from "formik";
import FormArrayAddUsuarios from "./FormArrayAddUsuarios";
import ButtonActionsArrayAddUsuarios from "./ButtonActionsArrayAddUsuarios";
import {
  initialArrayFormUsuarios,
  initialValuesPushArrayFormUsuarios,
} from "./inputsArrayAddUsuarios/InputsArrayAddUsuarios";
import { validationSchemaFormArrayUsuario } from "./schemaFormArrayAddUsuarios/validationSchemaFormArrayUsuarios";
const AppFormArrayAddUsuario = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormUsuarios}
        onSubmit={(data, helpers) => {
          console.log(data);
          helpers.resetForm();
        }}
        validationSchema={validationSchemaFormArrayUsuario}
      >
        {({ getFieldProps }) => (
          <Form className="flex p-4 gap-4 max-h-[57vh] overflow-y-auto justify-between border-border_primary/50 rounded-md shadow-md items-start min-h-[62vh] border">
            <FieldArray name="usuarios">
              {({ push, remove }) => (
                <>
                  <FormArrayAddUsuarios
                    remove={remove}
                    fieldProps={getFieldProps}
                  />
                  {/* Agregar otro formulario */}
                  <ButtonActionsArrayAddUsuarios
                    push={() => push(initialValuesPushArrayFormUsuarios)}
                  />
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppFormArrayAddUsuario;
