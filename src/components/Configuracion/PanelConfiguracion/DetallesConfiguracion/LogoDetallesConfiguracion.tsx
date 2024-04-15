import { useGetEmpresa } from "@/services/configuracion";
import { Image } from "antd";

const LogoDetallesConfiguracion = () => {
  // const { data } = useGetFileUpload();
  const { data } = useGetEmpresa();

  return (
    <>
      <div className="flex w-full justify-center my-8">
        <div className="flex p-4 justify-center flex-[0_1_20rem]">
          {data?.logo && (
            <Image
              src={data?.logo}
              alt="logo"
              style={{
                width: "10rem",
                height: "10rem",
              }}
              className="rounded-md shadow-md object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default LogoDetallesConfiguracion;
