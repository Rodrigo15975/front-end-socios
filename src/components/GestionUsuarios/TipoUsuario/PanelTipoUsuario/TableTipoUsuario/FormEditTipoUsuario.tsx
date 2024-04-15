import { Button, Input, Modal } from "@/components/Common";
import { useUpdateTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/mutation";
import { UpdateTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/types/typeTipoUsuario";
import { storeTipoUsuario } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { schemaValidationFormEditTipoUsuario } from "../FormTipoUsuario/FormularioRegistroTipoUsuario/validationSchemRegistroTipoUsuario/validationSchemRegistroTipoUsuario";

type PropsFormEditTipoUsuario = {
  editRecord: UpdateTipoUsuario | undefined;
};

const FormEditTipoUsuario: FC<PropsFormEditTipoUsuario> = ({ editRecord }) => {
  const { openEditFormTipoUsuario, setOpenEditFormTipoUsuario } =
    storeTipoUsuario();

  const { mutate } = useUpdateTipoUsuario();

  const handledSubmit = (
    data: UpdateTipoUsuario,
    helpers: FormikHelpers<UpdateTipoUsuario>
  ) => {
    const dataUpper: UpdateTipoUsuario =
      dataConverterMayuscula.converterUppercase(data) as UpdateTipoUsuario;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormTipoUsuario();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormTipoUsuario && (
          <Modal
            className="flex-[0_1_40rem] p-4 border rounded-md shadow-md bg-bg_default"
            type="CENTER"
            animate="LEFT"
          >
            <Formik
              initialValues={{ ...editRecord }}
              onSubmit={handledSubmit}
              validationSchema={schemaValidationFormEditTipoUsuario}
            >
              {({ getFieldProps }) => (
                <Form className="flex justify-between items-center  my-8">
                  <div className="p-2 flex-[0_1_30rem] flex flex-col gap-3">
                    <p className="text-text_primary  font-robotoSlab_600">
                      Actualizando Información
                    </p>
                    <Input
                      className="pl-4 w-full border-border_three/50 focus:border-border_primary h-[2.5rem] focus:bg-bg_five/20 shadow-md rounded-md"
                      reset
                      fieldProps={getFieldProps}
                      name={`tipo_usuario`}
                    />
                  </div>
                  <div className="p-2 flex-col flex gap-3 justify-between flex-[0_1_14rem]">
                    <Button
                      type="submit"
                      btnDefault
                      className="h-[2.5rem] bg-bg_secondary text-text_default"
                      label="Actualizar"
                    />
                    <Button
                      type="button"
                      btnDefault
                      onClick={setOpenEditFormTipoUsuario}
                      className="h-[2.5rem] bg-bg_three/50"
                      label="Cancelar"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormEditTipoUsuario;
