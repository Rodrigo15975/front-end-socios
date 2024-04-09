import { Input, PropsInputOptional } from "@/components";
import { labelInputs } from "./labeInputs/labelInputs";
import { FC } from "react";

const FormInputsLogin: FC<PropsInputOptional> = ({ fieldProps }) => {
  return (
    <>
      {labelInputs.map((inputs, index) => (
        <div
          className="animate-fade-up animate-once animate-delay-[600ms] w-full flex flex-col gap-2"
          key={`${index}-input-login`}
        >
          <Input
            labelClassName="text-[0.9rem] pl-4  text-text_secondary"
            className="pl-4 focus:border-border_primary/10 focus:bg-bg_three/15 transition p-2 rounded-md  shadow border border-border_primary"
            label={inputs.textPlaceHolder}
            type={inputs.type}
            name={inputs.name}
            fieldProps={fieldProps}
          />
        </div>
      ))}
    </>
  );
};

export default FormInputsLogin;
