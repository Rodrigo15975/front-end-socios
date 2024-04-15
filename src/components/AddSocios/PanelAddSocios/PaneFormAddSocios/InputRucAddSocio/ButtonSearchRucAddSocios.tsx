import { Button } from "@/components/Common";
import { useGetRucData } from "@/services/RUC/mutation";
import storeGetDataRuc from "@/store/storeGetDatRuc/storeGetDataRuc";
import { Socio } from "@/types/typeSocios";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

const ButtonSearchRucAddSocios = () => {
  const { values, setFieldValue } = useFormikContext<Socio>();
  const { mutate } = useGetRucData();
  const { dataRuc } = storeGetDataRuc();

  const getRuc = () => {
    if (values.ruc.length === 11) {
      mutate(values.ruc);
      return;
    }
  };

  useEffect(() => {
    if (dataRuc) {
      const {
        departamento,
        direccion,
        distrito,
        numeroDocumento,
        provincia,
        razonSocial,
      } = dataRuc;
      setFieldValue("ruc", numeroDocumento);
      setFieldValue("departamento", departamento);
      setFieldValue("distrito", distrito);
      setFieldValue("provincia", provincia);
      setFieldValue("razon_social", razonSocial);
      setFieldValue("direccion1", direccion);
    }
  }, [dataRuc, setFieldValue]);

  return (
    <>
      <Button
        type="button"
        onClick={getRuc}
        className="flex-[0_1_5rem] flex items-center justify-center rounded-md shadow-md outline-1 outline outline-bg_secondary/50 h-[3rem] bg-bg_five/50 hover:bg-bg_five transition"
      >
        <BiSearchAlt className="text-3xl text-text_primary/70" />
      </Button>
    </>
  );
};

export default ButtonSearchRucAddSocios;
