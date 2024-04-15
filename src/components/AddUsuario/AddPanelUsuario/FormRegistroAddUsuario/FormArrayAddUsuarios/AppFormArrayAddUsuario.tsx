import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import ButtonActionsArrayAddUsuarios from "./ButtonActionsArrayAddUsuarios";
import FormArrayAddUsuarios from "./FormArrayAddUsuarios";
import { initialArrayFormUsuarios } from "./inputsArrayAddUsuarios/InputsArrayAddUsuarios";
import { validationSchemaFormArrayUsuario } from "./schemaFormArrayAddUsuarios/validationSchemaFormArrayUsuarios";
import { useCreateUsuario } from "@/services/gestion-usuarios/usuarios/mutation";
import { CreateUsuario } from "@/services/gestion-usuarios/usuarios/types/typesUsuarios";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import StoreGetDataDni from "@/store/storeGetDataDni/storeGetDataDni";
const AppFormArrayAddUsuario = () => {
  const { mutate } = useCreateUsuario();
  const { clearDataDni } = StoreGetDataDni();
  const handledSubmit = (
    data: CreateUsuario,
    helpers: FormikHelpers<CreateUsuario>
  ) => {
    const dataUpper: CreateUsuario = dataConverterMayuscula.converterUppercase(
      data
    ) as CreateUsuario;
    mutate(dataUpper);
    clearDataDni();
    helpers.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialArrayFormUsuarios}
        onSubmit={handledSubmit}
        validationSchema={validationSchemaFormArrayUsuario}
      >
        {({ getFieldProps }) => (
          <Form className="flex p-4 gap-4 max-h-[57vh] overflow-y-auto justify-between border-border_primary/50 rounded-md shadow-md items-start min-h-[62vh] border">
            <FieldArray name="usuarios">
              {() => (
                <>
                  <FormArrayAddUsuarios fieldProps={getFieldProps} />
                  <ButtonActionsArrayAddUsuarios />
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
