import { useGetEmpresa } from "@/services/configuracion";
import { useUpload } from "@/services/configuracion/fileUpload/mutation";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";
import { itemTemplate } from "./ItemTemplateLogo";

const LogoConfiguracion = () => {
  const { mutate, isPending } = useUpload();
  const { data } = useGetEmpresa();

  const upload = async (e: FileUploadHandlerEvent) => {
    const formData = new FormData();
    formData.append("photo", e.files[0]);
    mutate({ _id: data?._id, file: formData });
    e.options.clear();
  };

  function isButtonDisabled(
    isPending: boolean,
    ruc: string | undefined
  ): boolean {
    return isPending || !ruc;
  }

  return (
    <>
      <div className="flex p-1 justify-center items-center w-full">
        <FileUpload
          style={{
            width: "100%",
            fontFamily: '"Roboto Slab", "serif"',
          }}
          // disabled={blockend}
          headerClassName="w-full flex gap-4"
          chooseLabel="Seleccionar una imagen"
          chooseOptions={{
            className: ` ${
              isPending ? "bg-bg_secondary" : ""
            }  bg-bg_five w-full font-robotoSlab text-text_primary`,
          }}
          disabled={isButtonDisabled(isPending, data?.ruc)}
          uploadHandler={upload}
          multiple={false}
          customUpload
          itemTemplate={itemTemplate}
          accept="image/*"
          maxFileSize={1000000}
          progressBarTemplate
          uploadLabel="Subir imagen"
          cancelOptions={{
            className: "hidden",
          }}
        />
      </div>
    </>
  );
};

export default LogoConfiguracion;
