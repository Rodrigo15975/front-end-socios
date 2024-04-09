import { Form, Formik } from "formik";
import PanelFormAddSocios from "./PanelFormAddSocios";
import ButtonActionsFormAddSocios from "./ButtonActionsFormAddSocios";
import InputRucAddSocios from "./InputRucAddSocio/InputRucAddSocios";
import { inputInitialValuesSocios } from "./inputsNameSocios/typesInputsNamesSocios";

const AppPanelFormAddSocios = () => {
  return (
    <>
      <div className="min-h-[85vh] border border-border_four/20 justify-between rounded-lg flex w-full">
        <Formik
          initialValues={inputInitialValuesSocios}
          onSubmit={(data, helpers) => {
            console.log(data);
            helpers.resetForm();
          }}
          // validationSchema={validationSchemaFormArrayUsuario}
        >
          {({ getFieldProps }) => (
            <Form className="flex w-full p-8 gap-4 overflow-y-auto justify-between">
              <div className="flex flex-wrap flex-[0_1_80rem]">
                <div className="w-full">
                  <InputRucAddSocios fieldProps={getFieldProps} />
                </div>
                <div className="flex w-full">
                  <PanelFormAddSocios fieldProps={getFieldProps} />
                </div>
              </div>
              <div className="flex items-start flex-[0_1_15rem]">
                <ButtonActionsFormAddSocios />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AppPanelFormAddSocios;
