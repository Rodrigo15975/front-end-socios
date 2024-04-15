import { Input, PropsInputOptional } from "@/components/Common";
import { InputDefaultNames } from "@/types/typeInputsDefault";
import _ from "lodash";
import { FC } from "react";
import { InpustNameSociosRegister } from "../inputsNameSocios/types/inputsNameSocios";
import ButtonSearchRucAddSocios from "./ButtonSearchRucAddSocios";

const InputRucAddSocios: FC<PropsInputOptional> = ({ fieldProps }) => {
  const { inputsNameSocios } = InpustNameSociosRegister();
  const renderAloneInput = (inputs: InputDefaultNames[]) =>
    inputs.map((input) => (
      <div key={input.name} className="flex-[0_1_40rem]">
        <Input
          reset
          labelClassName="text-text_three/80"
          fieldProps={fieldProps}
          className="w-full border p-4 text-text_primary focus:bg-bg_secondary/30 transition font-robotoSlab_500 border-border_four rounded-md h-[3rem]"
          name={input.name}
          label={input.textPlaceHolder}
        />
      </div>
    ));

  const inputAlone = _.chunk(inputsNameSocios.slice(0, 1), 1);

  const renderInput = () => inputAlone.map((input) => renderAloneInput(input));

  return (
    <>
      <div className="flex justify-start gap-4 items-end">
        {renderInput()}
        <ButtonSearchRucAddSocios />
      </div>
    </>
  );
};

export default InputRucAddSocios;
