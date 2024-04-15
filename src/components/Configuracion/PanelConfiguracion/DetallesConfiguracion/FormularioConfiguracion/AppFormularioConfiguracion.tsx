import { Button } from "@/components/Common";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { BsSave2 } from "react-icons/bs";
import FormularioConfiguracion from "./FormularioConfiguracion";
import {
  PropsInitialInputsConfiguracion,
  initialInputsConfiguracion,
} from "./inputsConfiguracion";
import { validationSchemaConfiguracion } from "./schemaValidationConfiguracion";
import { PartialEmpresa, useCreateEmpresa } from "@/services/configuracion";

const AppFormularioConfiguracion = () => {
  const { mutate } = useCreateEmpresa();

  const handleSubmitConfiguracion = (
    data: PartialEmpresa,
    helper: FormikHelpers<PropsInitialInputsConfiguracion>
  ) => {
    const formDataUppers = dataConverterMayuscula.converterUppercase(
      data
    ) as PartialEmpresa;
    mutate(formDataUppers);
    helper.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmitConfiguracion}
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
