import { Input, PropsInputOptional } from "@/components/Common";
import _ from "lodash";
import { FC } from "react";
import {
  InputsNamesAddUsuarios,
  inputsNamesFormArrayUsuarios,
} from "../inputsArrayAddUsuarios/InputsArrayAddUsuarios";

const InputsFormArrayUsuarios: FC<PropsInputOptional> = ({
  fieldProps,
  index,
}) => {
  const renderInputs = (inputs: InputsNamesAddUsuarios[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_24rem]">
        <Input
          label={input.textPlaceHolder}
          reset
          labelClassName="font-robotoSlab_400 text-text_three"
          className="w-full border-border_four/20 text-inputs-gradients font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-2 transition-all rounded-md focus:outline-border_primary outline"
          AsComPonente={input.Component}
          as={input.as}
          name={`usuarios.${index}.${input.name}`}
          fieldProps={fieldProps}
        />
      </div>
    ));

  // Quitamos el primer input del dni
  const groupedInputs = _.chunk(inputsNamesFormArrayUsuarios.slice(1), 3);

  return (
    <>
      {groupedInputs.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-4 justify-evenly gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
    </>
  );
};

export default InputsFormArrayUsuarios;
