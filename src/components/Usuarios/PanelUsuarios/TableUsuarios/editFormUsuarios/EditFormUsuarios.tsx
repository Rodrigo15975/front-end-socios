import { InputsNameFormUsuariosEdit } from "@/components/AddUsuario/AddPanelUsuario/FormRegistroAddUsuario/FormArrayAddUsuarios/inputsArrayAddUsuarios/InputsArrayAddUsuarios";
import { validationSchemaFormEditUsuario } from "@/components/AddUsuario/AddPanelUsuario/FormRegistroAddUsuario/FormArrayAddUsuarios/schemaFormArrayAddUsuarios/validationSchemaFormArrayUsuarios";
import { Button, Input, Modal } from "@/components/Common";
import { useUpdateUsuario } from "@/services/gestion-usuarios/usuarios/mutation";
import {
  PartialInitialEditFormUsuarios,
  UpdateUsuario,
} from "@/services/gestion-usuarios/usuarios/types/typesUsuarios";
import storeUsuario from "@/store/storeUsuarios/storeUsuarios";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";

type PropsFormEditUsuario = {
  editRecord?: UpdateUsuario;
};

const EditFormUsuarios: FC<PropsFormEditUsuario> = ({ editRecord }) => {
  const { openEditFormUsuario, setOpenEditFormUsuario } = storeUsuario();
  const { mutate } = useUpdateUsuario();

  const initialValues: PartialInitialEditFormUsuarios = {
    _id: editRecord?._id,
    apellidos: editRecord?.apellidos || "",
    celular: editRecord?.celular || "",
    nombres: editRecord?.nombres || "",
    direccion: editRecord?.direccion || "",
    dni: editRecord?.dni || "",
    telefono: editRecord?.telefono || "",
    tipo: editRecord?.id_tipo?.tipo_usuario || "",
    cargo: editRecord?.id_cargo?.cargo || "",
  };

  const handledSubmit = (
    data: PartialInitialEditFormUsuarios,
    helpers: FormikHelpers<PartialInitialEditFormUsuarios>
  ) => {
    const dataUpper: PartialInitialEditFormUsuarios =
      dataConverterMayuscula.converterUppercase(
        data
      ) as PartialInitialEditFormUsuarios;
    mutate(dataUpper);
    helpers.resetForm();
    setOpenEditFormUsuario();
  };

  return (
    <>
      <AnimatePresence>
        {openEditFormUsuario && (
          <Modal
            className="flex-[0_1_40rem] p-4 border rounded-md shadow-md bg-bg_default"
            type="CENTER"
            animate="RIGHT"
          >
            <Formik
              initialValues={initialValues}
              onSubmit={handledSubmit}
              validationSchema={validationSchemaFormEditUsuario}
            >
              {({ getFieldProps }) => (
                <Form className="flex justify-between items-center  my-8">
                  <div className="p-2 flex-[0_1_100%] max-h-[65vh] overflow-y-auto flex flex-col gap-3">
                    <p className="text-text_primary  font-robotoSlab_600">
                      Actualizando Información
                    </p>
                    {InputsNameFormUsuariosEdit.map((input, index) => (
                      <Input
                        key={`input-edit-${index}-usuario`}
                        labelClassName="text-text_primary/60"
                        className="w-full border-border_four/50 text-text_primary/70 font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-2 transition-all rounded-md focus:outline-border_primary outline"
                        AsComPonente={input.Component}
                        as={input.as}
                        label={input.textPlaceHolder}
                        reset
                        fieldProps={getFieldProps}
                        name={input.name}
                      />
                    ))}
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
                        onClick={setOpenEditFormUsuario}
                        className="h-[2.5rem] bg-bg_three/50"
                        label="Cancelar"
                      />
                    </div>
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

export default EditFormUsuarios;
