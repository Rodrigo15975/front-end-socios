import { Button, Input, Modal } from "@/components/Common";
import { UpdateSector } from "@/services/gestion-socios/sector/types/typeSector";
import { storeSector } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { validationSchemaUpdateSector } from "../../FormSector/FormularioRegistroSector/validationSchemaSector/validationSchemaSector";
import { useUpdateSector } from "@/services/gestion-socios/sector/mutation";

type PropsFormEditSector = {
  editRecord: UpdateSector | undefined;
};

const EditFormSector: FC<PropsFormEditSector> = ({ editRecord }) => {
  const { openEditFormSector, setOpenEditFormSector } = storeSector();

  const { mutate } = useUpdateSector();

  const handledSubmit = (
    data: UpdateSector,
    helpers: FormikHelpers<UpdateSector>
  ) => {
    const dataUpper: UpdateSector = dataConverterMayuscula.converterUppercase(
      data
    ) as UpdateSector;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormSector();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormSector && (
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
              validationSchema={validationSchemaUpdateSector}
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
                      name={`sector`}
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
                      onClick={setOpenEditFormSector}
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

export default EditFormSector;
