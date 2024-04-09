import { Form, Formik } from "formik";
import FormularioConfiguracion from "./FormularioConfiguracion";
import { Button } from "@/components/Common";
import { BsSave2 } from "react-icons/bs";
import { initialInputsConfiguracion } from "./inputsConfiguracion";
import { validationSchemaConfiguracion } from "./schemaValidationConfiguracion";

const AppFormularioConfiguracion = () => {
  return (
    <>
      <Formik
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchemaConfiguracion}
        initialValues={initialInputsConfiguracion}
        className="p-4"
      >
        {({ getFieldProps }) => (
          <Form className="p-8 flex flex-col gap-8">
            <FormularioConfiguracion fieldProps={getFieldProps} />
            <Button
              type="submit"
              btnDefault
              className="flex mt-[2rem] items-center justify-center gap-3 text-text_primary font-robotoSlab_500 bg-bg_five/50 hover:bg-bg_five transition h-[3rem]"
              label="Guardar"
            >
              <BsSave2 />
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppFormularioConfiguracion;
