import { Input, PropsInputOptional } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import { useFormikContext } from "formik";
import { FC } from "react";
import { BiTrash } from "react-icons/bi";
import { InitialValuesArrayFormularioTipoUsuario } from "./inputsTipoUsuario/inputsTipoUsuario";

const FormularioRegistroTipoUsuario: FC<PropsInputOptional> = ({
  fieldProps,
  remove,
}) => {
  const { values } =
    useFormikContext<InitialValuesArrayFormularioTipoUsuario>();

  const removeFormTipoUsuario = (index: number) => remove && remove(index);

  return (
    <>
      {values.tipos_usuarios.map((_, index) => (
        <div
          key={`input-${index}-form`}
          className="my-2 p-4 border-border_primary/50 border rounded-md items-startflex flex-col"
        >
          <p className="mb-2 text-text_primary/50 text-start w-full border-b border-bg_primary/50 font-robotoSlab_500">
            Nuevo tipo de Usuario {index + 1}
          </p>
          <Input
            className="pl-4 w-full  border-border_three/10 focus:border-border_primary h-[2.5rem] focus:bg-bg_five/20 shadow-md rounded-md"
            reset
            fieldProps={fieldProps}
            name={`tipos_usuarios.${index}.tipo_usuario`}
          />
          <div className="w-full flex justify-end">
            <ButtonIcon
              className="flex justify-end max-w-[5rem] cursor-pointer"
              onClick={() => removeFormTipoUsuario(index)}
            >
              <BiTrash className="text-2xl mt-3" />
            </ButtonIcon>
          </div>
        </div>
      ))}
    </>
  );
};

export default FormularioRegistroTipoUsuario;
