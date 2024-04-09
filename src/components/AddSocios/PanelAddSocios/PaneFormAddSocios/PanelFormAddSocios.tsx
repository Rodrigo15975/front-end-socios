import { Input, PropsInputOptional } from "@/components/Common";
import _ from "lodash";
import { FC } from "react";
import { inputsNameSocios } from "./inputsNameSocios/types/inputsNameSocios";
import { InputsNamesSocios } from "./inputsNameSocios/typesInputsNamesSocios";

const PanelFormAddSocios: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputsNamesSocios[]) =>
    inputs.map((input) => (
      <div key={input.name} className="flex flex-col flex-[0_1_100%]">
        <Input
          reset
          as={input.as}
          type={input.type}
          labelClassName="text-text_primary/80 font-robotoSlab_500"
          fieldProps={fieldProps}
          label={input.textPlaceHolder}
          className="w-full border p-4 text-text_primary focus:outline outline-1 outline-bg_secondary/10 focus:bg-bg_five/30 transition font-robotoSlab_500 border-border_four/20 rounded-md h-[3rem]"
          name={input.name}
        />
      </div>
    ));

  const groupedInputs = _.chunk(inputsNameSocios.slice(1), 3);

  const renderInputGroup = () =>
    groupedInputs.map((inputs, index) => (
      <div key={index} className="flex mt-8 gap-4 justify-evenly">
        {renderInputs(inputs)}
      </div>
    ));

  return (
    <div className="flex-[0_1_80rem] max-h-[71vh] overflow-y-auto rounded-md">
      {renderInputGroup()}
    </div>
  );
};

export default PanelFormAddSocios;
