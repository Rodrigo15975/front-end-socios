import { useCreateTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/mutation";
import { CreateTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/types/typeTipoUsuario";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import ButtonsFormularioTipoUsuario from "./ButtonsFormularioTipoUsuario";
import FormularioRegistroTipoUsuario from "./FormularioRegistroTipoUsuario";
import {
  initialArrayFormularioTipoUsuarios,
  initialValuesPushArray,
} from "./inputsTipoUsuario/inputsTipoUsuario";
import { initialValuesArrayFormularioTipoUsuarioSchema } from "./validationSchemRegistroTipoUsuario/validationSchemRegistroTipoUsuario";
import { storeTipoUsuario } from "@/store";

const AppFormularioRegistroTipoUsuario = () => {
  const { mutate } = useCreateTipoUsuario();
  const { setOpenFormTipoUsuario } = storeTipoUsuario();

  const handleSubmit = (
    data: CreateTipoUsuario,
    helpers: FormikHelpers<CreateTipoUsuario>
  ) => {
    mutate(data);
    helpers.resetForm();
    setOpenFormTipoUsuario();
  };

  return (
    <>
      <Formik
        initialValues={initialArrayFormularioTipoUsuarios}
        onSubmit={handleSubmit}
        validationSchema={initialValuesArrayFormularioTipoUsuarioSchema}
      >
        {({ getFieldProps }) => (
          <Form className="flex justify-between items-start min-h-[40vh] mt-8">
            <FieldArray name="tipos_usuarios">
              {({ push, remove }) => (
                <>
                  <div className="p-2 flex-[0_1_30rem] min-h-[50vh]">
                    <FormularioRegistroTipoUsuario
                      fieldProps={getFieldProps}
                      remove={remove}
                    />
                  </div>
                  <div className="p-2 flex-[0_1_14rem]">
                    <ButtonsFormularioTipoUsuario
                      onClick={() => push(initialValuesPushArray)}
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

export default AppFormularioRegistroTipoUsuario;
