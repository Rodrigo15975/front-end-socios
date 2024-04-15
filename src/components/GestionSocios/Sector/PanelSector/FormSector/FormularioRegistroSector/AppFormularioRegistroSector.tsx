import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import { validationSchemaSector } from "./validationSchemaSector/validationSchemaSector";
import {
  initialArrayFormularioSector,
  initialValuesPushArraySector,
} from "./inputsSector/inputsSector";
import FormularioRegistroSector from "./FormularioRegistroSector";
import ButtonsFormularioSector from "./ButtonsFormularioSector";
import { useCreateSector } from "@/services/gestion-socios/sector/mutation";
import { CreateSector } from "@/services/gestion-socios/sector/types/typeSector";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { storeSector } from "@/store";

const AppFormularioSector = () => {
  const { mutate } = useCreateSector();
  const { setOpenFormSector } = storeSector();
  const handledSubmit = (
    data: CreateSector,
    helper: FormikHelpers<CreateSector>
  ) => {
    const dataUpper: CreateSector = dataConverterMayuscula.converterUppercase(
      data
    ) as CreateSector;
    mutate(dataUpper);
    setOpenFormSector();
    helper.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialArrayFormularioSector}
        onSubmit={handledSubmit}
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
