import { InpustNameSociosRegister } from "@/components/AddSocios/PanelAddSocios/PaneFormAddSocios/inputsNameSocios/types/inputsNameSocios";
import { Button, Input, Modal } from "@/components/Common";
import { useUpdateSocio } from "@/services/gestion-socios/socios/mutation";
import {
  PartialInitialEditFormSocios,
  UpdateSocio,
} from "@/services/gestion-socios/socios/types/typesSocios";
import storeSocio from "@/store/storeSocios/storeSocios";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";

type PropsFormEditSocios = {
  editRecord?: UpdateSocio;
};
// COPIANDO DE USUARIOS EDITFORM CON CUIDADO
const EditFormSocios: FC<PropsFormEditSocios> = ({ editRecord }) => {
  const { inputsNameSociosEditForm } = InpustNameSociosRegister();
  const { openEditFormSocio, setOpenEditFormSocio } = storeSocio();
  const { mutate } = useUpdateSocio();
  const initialValues: PartialInitialEditFormSocios = {
    _id: editRecord?._id,
    actividad: editRecord?.id_actividad?.actividad,
    tipo_socio: editRecord?.id_tipo_socio?.socio,
    sector: editRecord?.id_sector?.sector,
    ruc: editRecord?.ruc,
    razon_social: editRecord?.razon_social,
    dni: editRecord?.dni,
    telefono: editRecord?.telefono,
    correo: editRecord?.correo,
    representante_legal: editRecord?.representante_legal,
    departamento: editRecord?.departamento,
    provincia: editRecord?.provincia,
    distrito: editRecord?.distrito,
    fecha_inicio_actividades: editRecord?.fecha_inicio_actividades,
    celular: editRecord?.celular,
    direccion1: editRecord?.direccion1,
    direccion2: editRecord?.direccion2,
    partida_registral: editRecord?.partida_registral,
  };
  const handledSubmit = (
    data: UpdateSocio,
    helpers: FormikHelpers<UpdateSocio>
  ) => {
    const dataUpper: UpdateSocio = dataConverterMayuscula.converterUppercase(
      data
    ) as UpdateSocio;
    mutate(dataUpper);
    setOpenEditFormSocio();
    helpers.resetForm();
  };
  return (
    <>
      <AnimatePresence>
        {openEditFormSocio && (
          <Modal
            onClick={setOpenEditFormSocio}
            className="flex-[0_1_40rem] p-4 border rounded-md shadow-md bg-bg_default"
            type="CENTER"
            animate="RIGHT"
          >
            <Formik
              initialValues={{
                ...initialValues,
              }}
              onSubmit={handledSubmit}
            >
              {({ getFieldProps }) => (
                <Form className="flex justify-between items-center  my-8">
                  <div className="p-2 flex-[0_1_100%] max-h-[65vh] overflow-y-auto flex flex-col gap-3">
                    <p className="text-text_primary  font-robotoSlab_600">
                      Actualizando Información
                    </p>
                    {inputsNameSociosEditForm.map((input, index) => (
                      <Input
                        reset
                        key={`input-edit-${index}-socio`}
                        labelClassName="text-text_primary/60"
                        className="w-full border-border_four/80  shadow-md text-text_primary font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-2 transition-all rounded-md focus:outline-border_primary outline"
                        AsComPonente={input.ComponentType}
                        as={input.as}
                        label={input.textPlaceHolder}
                        type={input.type}
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
                        onClick={setOpenEditFormSocio}
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

export default EditFormSocios;
