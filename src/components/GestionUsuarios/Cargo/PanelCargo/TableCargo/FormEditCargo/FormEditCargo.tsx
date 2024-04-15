import { Button, Input, Modal } from "@/components/Common";
import { useUpdateCargo } from "@/services/gestion-usuarios/cargo/mutation";
import { UpdateCargo } from "@/services/gestion-usuarios/cargo/types/typeCargo";
import { storeCargo } from "@/store";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { validationSchemaUpdateCargo } from "../../FormCargo/FormularioRegistroCargo/validationSchemaCargo/validationSchemaCargo";

type PropsFormEditCargo = {
  editRecord: UpdateCargo | undefined;
};

const FormEditCargo: FC<PropsFormEditCargo> = ({ editRecord }) => {
  const { openEditFormCargo, setOpenEditFormCargo } = storeCargo();

  const { mutate } = useUpdateCargo();

  const handledSubmit = (
    data: UpdateCargo,
    helpers: FormikHelpers<UpdateCargo>
  ) => {
    const dataUpper: UpdateCargo = dataConverterMayuscula.converterUppercase(
      data
    ) as UpdateCargo;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormCargo();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormCargo && (
          <Modal
            className="flex-[0_1_40rem] p-4 border rounded-md shadow-md bg-bg_default"
            type="CENTER"
            animate="RIGHT"
            onClick={setOpenEditFormCargo}
          >
            <Formik
              initialValues={{ ...editRecord }}
              onSubmit={handledSubmit}
              // verificar esto urgente
              validationSchema={validationSchemaUpdateCargo}
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
                      name={`cargo`}
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
                      onClick={setOpenEditFormCargo}
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

export default FormEditCargo;
