import { FileUpload } from "primereact/fileupload";

const LogoConfiguracion = () => {
  return (
    <div>
      <div className="flex p-1 justify-center items-center w-full">
        <FileUpload
          style={{
            width: "100%",
            fontFamily: '"Roboto Slab", "serif"',
          }}
          headerClassName="w-full flex gap-4"
          chooseLabel="Seleccionar una imagen"
          chooseOptions={{
            className: "bg-bg_five w-full font-robotoSlab text-text_primary",
          }}
          name="demo[]"
          url={"/api/upload"}
          multiple={false}
          accept="image/*"
          maxFileSize={1000000}
          uploadLabel="Subir imagen"
          uploadOptions={{
            className: "",
          }}
          cancelOptions={{
            className: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default LogoConfiguracion;
