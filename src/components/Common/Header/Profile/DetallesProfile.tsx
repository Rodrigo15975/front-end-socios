import { useGetId, useGetProfile } from "@/services/profile/queries";
import { storeOpenProfile } from "@/store";
import { capitalize } from "lodash";
import Button from "../../Button/Button";

const DetallesProfile = () => {
  const dataId = useGetId();
  const { setOpenProfile } = storeOpenProfile();
  const { data } = useGetProfile(dataId.data?.id ?? "");

  const { apellidos, celular, dni, id_cargo, id_tipo, nombres } = data ?? {};

  // Capitalizar todos los valores
  const capitalizeApellidos = capitalize(apellidos);
  const capitalizeCelular = capitalize(celular);
  const capitalizeDni = capitalize(dni);
  const capitalizeIdCargo = capitalize(id_cargo?.cargo);
  const capitalizeIdTipo = capitalize(id_tipo?.tipo_usuario);
  const capitalizeNombres = capitalize(nombres);

  return (
    <div className="flex flex-col h-full justify-between gap-3">
      <div className="flex-[0_1_30rem] flex flex-col gap-3">
        <p className="text-text_primary/70 flex-wrap justify-between flex gap-4 font-robotoSlab_600 ">
          Apellidos:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md  text-text_three font-robotoSlab_600">
            {capitalizeApellidos}
          </span>
        </p>
        <p className="text-text_primary/70 flex-wrap justify-between flex gap-4 font-robotoSlab_600 ">
          Celular:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md  text-text_three font-robotoSlab_600 ">
            {capitalizeCelular}
          </span>
        </p>
        <p className="text-text_primary/70 flex-wrap justify-between flex gap-4 font-robotoSlab_600 ">
          DNI:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center text-text_three flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md font-robotoSlab_600">
            {capitalizeDni}
          </span>
        </p>
        <p className="text-text_primary/70 flex-wrap justify-between  flex gap-4 font-robotoSlab_600 ">
          Cargo:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md  text-text_three font-robotoSlab_600 ">
            {capitalizeIdCargo}
          </span>
        </p>
        <p className="text-text_primary/70 flex-wrap justify-between  flex gap-4 font-robotoSlab_600 ">
          Tipo Usuario:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center  flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md text-text_three font-robotoSlab_600 ">
            {capitalizeIdTipo}
          </span>
        </p>
        <p className="text-text_primary/70 flex-wrap justify-between  flex gap-4 font-robotoSlab_600 ">
          Nombres:{" "}
          <span className="text-[1rem] hover:shadow-none transition h-[3rem] flex items-center justify-center  flex-[0_1_100%]  bg-bg_five/10 shadow-md rounded-md text-text_three font-robotoSlab_600 ">
            {capitalizeNombres}
          </span>
        </p>
      </div>
      <div className="flex-[0_1_10rem] flex-wrap flex items-end">
        <Button
          onClick={setOpenProfile}
          type="button"
          btnStyled
          className="bg-bg_secondary/50 h-[3rem] font-robotoSlab_500 text-xl text-text_default"
          label="Salir"
        />
      </div>
    </div>
  );
};

export default DetallesProfile;
