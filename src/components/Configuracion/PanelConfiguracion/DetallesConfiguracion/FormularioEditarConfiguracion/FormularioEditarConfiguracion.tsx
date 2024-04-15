import { Button } from "@/components/Common";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { BsSave2 } from "react-icons/bs";
import { Form, Formik } from "formik";

import { storeConfiguracion } from "@/store";
import { validationSchemaConfiguracion } from "../FormularioConfiguracion/schemaValidationConfiguracion";

import FormularioInputsEditarConfiguracion from "./FormularioInputsEditarConfiguracion";
import {
  PartialEmpresa,
  useGetEmpresa,
  useUpdateEmpresa,
} from "@/services/configuracion";

const FormularioEditarConfiguracion = () => {
  const { setOpenFormEditConfiguracion } = storeConfiguracion();

  const { data } = useGetEmpresa();
  const { mutate } = useUpdateEmpresa();

  const handleSubmit = (dataUpdate: PartialEmpresa) => {
    mutate(dataUpdate);
    // Cerramos el formulario de update
    setOpenFormEditConfiguracion();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchemaConfiguracion}
        initialValues={{
          ...data,
        }}
        className="p-4"
      >
        {({ getFieldProps }) => (
          <Form className="p-8 max-md:p-4 max-md:gap-4 flex flex-col justify-between gap-8 w-full">
            <div className="flex justify-between bg-bg_five/20 p-2">
              <p className="text-2xl max-md:text-xl flex gap-4 items-center rounded-md text-text_three">
                Editando Información
                <BiEdit />
              </p>
              <Button
                type="button"
                btnDefault
                label="Volver"
                onClick={setOpenFormEditConfiguracion}
                className="text-xl flex items-center justify-center gap-3 flex-[0_1_10rem] bg-bg_default"
              >
                <BiArrowBack />
              </Button>
            </div>
            <FormularioInputsEditarConfiguracion fieldProps={getFieldProps} />
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

export default FormularioEditarConfiguracion;
