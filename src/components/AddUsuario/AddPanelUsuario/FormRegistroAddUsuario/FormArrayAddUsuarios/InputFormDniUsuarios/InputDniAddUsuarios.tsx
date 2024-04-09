import { Button, Input, PropsInputOptional } from "@/components/Common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { GrSearchAdvanced } from "react-icons/gr";
import { InitialValuesArrayFormUsuarios } from "../inputsArrayAddUsuarios/InputsArrayAddUsuarios";

const InputDniAddUsuarios: FC<PropsInputOptional> = ({ index, fieldProps }) => {
  const { values, setFieldValue } =
    useFormikContext<InitialValuesArrayFormUsuarios>();

  const first = () => {
    values.usuarios.map((value, index) => {
      if (value.dni) {
        // Por el index se hace el cambio
        setFieldValue(`usuarios.${index}.nombres`, "coco");
        console.log(value.dni);
        return;
      }
      return console.log("No hay dni");
    });
  };

  return (
    <>
      <div className="flex justify-end gap-4 items-center border-b border-t border-border_primary/50 py-[1rem] px-[1rem] mb-[1rem]">
        <div className="flex-[0_1_20rem]">
          <Input
            className="focus:outline-border_primary outline transition-all h-[3rem] border-border_primary/30 border rounded-lg pl-[1rem] w-full"
            fieldProps={fieldProps}
            textPlaceHolder="DNI"
            name={`usuarios.${index}.dni`}
          />
        </div>
        <Button
          type="button"
          onClick={first}
          className="h-[3rem] text-text_primary hover:text-text_four flex items-center hover:shadow-md transition justify-center w-[3rem] rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100"
        >
          <GrSearchAdvanced className=" text-2xl" />
        </Button>
      </div>
    </>
  );
};

export default InputDniAddUsuarios;
