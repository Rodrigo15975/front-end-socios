import { Button, Input, Modal } from "@/components/Common";
import { useUpdateActividad } from "@/services/gestion-socios/actividad/mutation";
import { UpdateActividad } from "@/services/gestion-socios/actividad/types/typeActividad";
import { storeActividad } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { validationSchemaUpdateActividad } from "../../FormActividad/FormularioRegistroActividad/validationSchemaActividad/validationSchemaActividad";

type PropsFormEditActividad = {
  editRecord: UpdateActividad | undefined;
};

const EditFormActividad: FC<PropsFormEditActividad> = ({ editRecord }) => {
  const { openEditFormActividad, setOpenEditFormActividad } = storeActividad();

  const { mutate } = useUpdateActividad();

  const handledSubmit = (
    data: UpdateActividad,
    helpers: FormikHelpers<UpdateActividad>
  ) => {
    const dataUpper: UpdateActividad =
      dataConverterMayuscula.converterUppercase(data) as UpdateActividad;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormActividad();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormActividad && (
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
              validationSchema={validationSchemaUpdateActividad}
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
                      name={`actividad`}
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
                      onClick={setOpenEditFormActividad}
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

export default EditFormActividad;
