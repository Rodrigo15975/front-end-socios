import { Input, PropsInputOptional } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import { useFormikContext } from "formik";
import { FC } from "react";
import { BiTrash } from "react-icons/bi";
import { InitialValuesArrayFormularioActividad } from "./inputsActividad/inputsActividad";

const FormularioRegistroActividad: FC<PropsInputOptional> = ({
  fieldProps,
  remove,
}) => {
  const { values } = useFormikContext<InitialValuesArrayFormularioActividad>();

  const removeFormActividad = (index: number) => remove && remove(index);

  return (
    <>
      {values.actividades.map((_, index) => (
        <div
          key={`input-${index}-form`}
          className="my-2 p-4 border-border_primary/50 border rounded-md items-startflex flex-col"
        >
          <p className="mb-2 text-text_primary/50 text-start w-full border-b border-bg_primary/50 font-robotoSlab_500">
            Nueva Actividad {index + 1}
          </p>
          <Input
            className="pl-4 w-full  border-border_three/10 focus:border-border_primary h-[2.5rem] focus:bg-bg_five/20 shadow-md rounded-md"
            reset
            fieldProps={fieldProps}
            name={`actividades.${index}.actividad`}
          />
          <div className="w-full flex justify-end">
            <ButtonIcon
              className="flex justify-end max-w-[5rem] cursor-pointer"
              onClick={() => removeFormActividad(index)}
            >
              <BiTrash className="text-2xl mt-3" />
            </ButtonIcon>
          </div>
        </div>
      ))}
    </>
  );
};

export default FormularioRegistroActividad;
