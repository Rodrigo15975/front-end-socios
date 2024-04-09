import { FieldArray, Form, Formik } from "formik";
import ButtonsFormularioCargo from "./ButtonsFormularioCargo";
import FormularioRegistroCargo from "./FormularioRegistroCargo";
import {
  initialArrayFormularioCargo,
  initialValuesPushArrayCargo,
} from "./inputsCargo/inputsCargo";
import { validationSchemaCargo } from "./validationSchemaCargo/validationSchemaCargo";

const AppFormularioCargo = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioCargo}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchemaCargo}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="cargos">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroCargo
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioCargo
                      onClick={() => push(initialValuesPushArrayCargo)}
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

export default AppFormularioCargo;
