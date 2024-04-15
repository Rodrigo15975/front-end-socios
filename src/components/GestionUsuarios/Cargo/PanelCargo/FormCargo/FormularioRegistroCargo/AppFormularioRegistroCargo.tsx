import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import ButtonsFormularioCargo from "./ButtonsFormularioCargo";
import FormularioRegistroCargo from "./FormularioRegistroCargo";
import {
  initialArrayFormularioCargo,
  initialValuesPushArrayCargo,
} from "./inputsCargo/inputsCargo";
import { validationSchemaCargo } from "./validationSchemaCargo/validationSchemaCargo";
import { useCreateCargo } from "@/services/gestion-usuarios/cargo/mutation";
import { CreateCargo } from "@/services/gestion-usuarios/cargo/types/typeCargo";
import { storeCargo } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";

const AppFormularioCargo = () => {
  const { mutate } = useCreateCargo();
  const { setOpenFormCargo } = storeCargo();

  const handledSubmit = (
    data: CreateCargo,
    helpers: FormikHelpers<CreateCargo>
  ) => {
    const dataUppers: CreateCargo = dataConverterMayuscula.converterUppercase(
      data
    ) as CreateCargo;
    mutate(dataUppers);
    setOpenFormCargo();
    helpers.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialArrayFormularioCargo}
        onSubmit={handledSubmit}
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
