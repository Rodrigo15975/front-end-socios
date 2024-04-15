import { Input, PropsInputOptional } from "@/components/Common";
import { FC } from "react";
import { inputsLabelConfiguracion } from "../FormularioConfiguracion/inputsConfiguracion";

const FormularioInputsEditarConfiguracion: FC<PropsInputOptional> = ({
  fieldProps,
}) => {
  return (
    <>
      {inputsLabelConfiguracion.map((inputs, index) => (
        <div
          key={`input-${index}-configuracion`}
          className="flex gap-4 w-full flex-wrap justify-between"
        >
          <label
            className="text-text_primary/80 flex-[0_1_5rem] font-robotoSlab_600"
            htmlFor={inputs.name}
          >
            {inputs.textPlaceHolder}
          </label>
          <Input
            classNameParentInputs="flex-[0_1_30rem]"
            labelClassName="bg-black"
            className="text-text_primary font-robotoSlab_600 flex-[0_1_2.5rem] border-border_four/30 focus:border-border_primary focus:bg-bg_five/10 transition pl-4 h-[2.5rem] rounded-md"
            fieldProps={fieldProps}
            name={inputs.name}
          />
        </div>
      ))}
    </>
  );
};

export default FormularioInputsEditarConfiguracion;
