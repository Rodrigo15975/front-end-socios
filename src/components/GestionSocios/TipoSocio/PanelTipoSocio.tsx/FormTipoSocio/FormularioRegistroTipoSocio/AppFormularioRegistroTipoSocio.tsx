import { useCreateTipoSocio } from "@/services/gestion-socios/tipo-socios/mutation";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import ButtonsFormularioTipoSocio from "./ButtonsFormularioTipoSocio";
import FormularioRegistroTipoSocio from "./FormularioRegistroTipoSocio";
import {
  initialArrayFormularioTipoSocio,
  initialValuesPushArrayTipoSocio,
} from "./inputsTipoSocio/inputsTipoSocio";
import { validationSchemaTipoSocio } from "./validationSchemaTipoSocio/validationSchemaActividad";
import { CreateTipoSocio } from "@/services/gestion-socios/tipo-socios/types/typeTipoSocios";
import { storeTipoSocio } from "@/store";

const AppFormularioTipoSocio = () => {
  const { mutate } = useCreateTipoSocio();
  const { setOpenFormTipoSocio } = storeTipoSocio();
  const handleSubmit = (
    data: CreateTipoSocio,
    helper: FormikHelpers<CreateTipoSocio>
  ) => {
    const dataUppers: CreateTipoSocio =
      dataConverterMayuscula.converterUppercase(data) as CreateTipoSocio;
    mutate(dataUppers);
    helper.resetForm();
    setOpenFormTipoSocio();
  };
  return (
    <>
      <Formik
        initialValues={initialArrayFormularioTipoSocio}
        onSubmit={handleSubmit}
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
