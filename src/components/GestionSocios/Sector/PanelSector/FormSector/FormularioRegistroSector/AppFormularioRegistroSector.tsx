import { FieldArray, Form, Formik } from "formik";
import { validationSchemaSector } from "./validationSchemaSector/validationSchemaSector";
import {
  initialArrayFormularioSector,
  initialValuesPushArraySector,
} from "./inputsSector/inputsSector";
import FormularioRegistroSector from "./FormularioRegistroSector";
import ButtonsFormularioSector from "./ButtonsFormularioSector";

const AppFormularioSector = () => {
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioSector}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchemaSector}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="sectores">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroSector
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioSector
                      onClick={() => push(initialValuesPushArraySector)}
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

export default AppFormularioSector;
