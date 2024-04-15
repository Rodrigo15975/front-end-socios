import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import ButtonsFormularioActividad from "./ButtonsFormularioActividad";
import FormularioRegistroActividad from "./FormularioRegistroActividad";
import {
  initialArrayFormularioActividad,
  initialValuesPushArrayActividad,
} from "./inputsActividad/inputsActividad";
import { validationSchemaActividad } from "./validationSchemaActividad/validationSchemaActividad";
import { useCreateActividad } from "@/services/gestion-socios/actividad/mutation";
import { CreateActividad } from "@/services/gestion-socios/actividad/types/typeActividad";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { storeActividad } from "@/store";

const AppFormularioActividad = () => {
  const { setOpenFormActividad } = storeActividad();

  const { mutate } = useCreateActividad();

  const handledSubmit = (
    data: CreateActividad,
    heplers: FormikHelpers<CreateActividad>
  ) => {
    const dataUpper: CreateActividad =
      dataConverterMayuscula.converterUppercase(data) as CreateActividad;
    mutate(dataUpper);
    heplers.resetForm();
    setOpenFormActividad();
  };

  return (
    <>
      <Formik
        initialValues={initialArrayFormularioActividad}
        onSubmit={handledSubmit}
        validationSchema={validationSchemaActividad}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="actividades">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroActividad
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioActividad
                      onClick={() => push(initialValuesPushArrayActividad)}
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

export default AppFormularioActividad;
