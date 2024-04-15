import { Button, Input, Modal } from "@/components/Common";
import { useUpdateTipoSocio } from "@/services/gestion-socios/tipo-socios/mutation";
import { UpdateTipoSocio } from "@/services/gestion-socios/tipo-socios/types/typeTipoSocios";
import { storeTipoSocio } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { validationSchemaFormEditTipoSocio } from "../../FormTipoSocio/FormularioRegistroTipoSocio/validationSchemaTipoSocio/validationSchemaActividad";

type PropsFormEditTipoSocio = {
  editRecord: UpdateTipoSocio | undefined;
};

const EditFormTipoSocio: FC<PropsFormEditTipoSocio> = ({ editRecord }) => {
  const { openEditFormTipoSocio, setOpenEditFormTipoSocio } = storeTipoSocio();

  const { mutate } = useUpdateTipoSocio();

  const handledSubmit = (
    data: UpdateTipoSocio,
    helpers: FormikHelpers<UpdateTipoSocio>
  ) => {
    const dataUpper: UpdateTipoSocio =
      dataConverterMayuscula.converterUppercase(data) as UpdateTipoSocio;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormTipoSocio();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormTipoSocio && (
          <Modal
            className="flex-[0_1_40rem] p-4 border rounded-md shadow-md bg-bg_default"
            type="CENTER"
            animate="RIGHT"
          >
            <Formik
              initialValues={{ ...editRecord }}
              onSubmit={handledSubmit}
              verificar
              esto
              urgente
              validationSchema={validationSchemaFormEditTipoSocio}
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
                      name={`socio`}
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
                      onClick={setOpenEditFormTipoSocio}
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

export default EditFormTipoSocio;
