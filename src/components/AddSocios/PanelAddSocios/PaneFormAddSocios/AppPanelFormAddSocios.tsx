import { useCreateSocio } from "@/services/gestion-socios/socios/mutation";
import { CreateSocio } from "@/services/gestion-socios/socios/types/typesSocios";
import { useGetId } from "@/services/profile/queries";
import { registerDateNow } from "@/utils/convertedDateNow";
import { Form, Formik, FormikHelpers } from "formik";
import ButtonActionsFormAddSocios from "./ButtonActionsFormAddSocios";
import InputRucAddSocios from "./InputRucAddSocio/InputRucAddSocios";
import PanelFormAddSocios from "./PanelFormAddSocios";
import { inputInitialValuesSocios } from "./inputsNameSocios/typesInputsNamesSocios";
import { validationSchemaSocios } from "./validationSocios/schemaValidationSocios";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import storeGetDataRuc from "@/store/storeGetDatRuc/storeGetDataRuc";

const AppPanelFormAddSocios = () => {
  const userData = useGetId();
  const { mutate } = useCreateSocio();
  const { clearDataRuc } = storeGetDataRuc();
  const handleSubmit = (
    data: CreateSocio,
    helpers: FormikHelpers<CreateSocio>
  ) => {
    const fechaNow = registerDateNow();
    data.fecha_inscripcion = fechaNow;
    const dataUpper: CreateSocio = dataConverterMayuscula.converterUppercase(
      data
    ) as CreateSocio;
    mutate(dataUpper);
    helpers.resetForm();
    clearDataRuc();
  };

  return (
    <>
      <div className="min-h-[80vh] border border-border_four/20 justify-between rounded-lg flex w-full">
        <Formik
          initialValues={{
            ...inputInitialValuesSocios,
            id_usuario: userData.data?.id ?? "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaSocios}
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
