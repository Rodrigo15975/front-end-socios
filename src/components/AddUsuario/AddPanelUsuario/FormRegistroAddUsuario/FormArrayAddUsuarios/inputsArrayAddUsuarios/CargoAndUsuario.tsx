import { useGetCargos } from "@/services/gestion-usuarios/cargo/queries";
import { useGetTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/queries";
export const Cargo = () => {
  const { data } = useGetCargos();
  const dataFilter = data?.filter((item) => item.cargo !== "SIN CARGO");
  return (
    <>
      <option value="">Seleccione</option>
      {dataFilter?.map((cargo) => (
        <option key={cargo._id} value={cargo.cargo}>
          {cargo.cargo}
        </option>
      ))}
    </>
  );
};
export const TipoUsuario = () => {
  const { data } = useGetTipoUsuario();
  const dataFilter = data?.filter((item) => item.tipo_usuario !== "SIN TIPO");
  return (
    <>
      <option value="">Seleccione</option>
      {dataFilter?.map((tipos) => (
        <option key={tipos._id} value={tipos.tipo_usuario}>
          {tipos.tipo_usuario}
        </option>
      ))}
    </>
  );
};

export const FormEditCargo = () => {
  const { data } = useGetCargos();
  return (
    <>
      {data?.map((cargo) => (
        <option key={cargo._id} value={cargo.cargo}>
          {cargo.cargo}
        </option>
      ))}
    </>
  );
};
export const FormEditTipoUsuario = () => {
  const { data } = useGetTipoUsuario();
  return (
    <>
      {data?.map((tipos) => (
        <option key={tipos._id} value={tipos.tipo_usuario}>
          {tipos.tipo_usuario}
        </option>
      ))}
    </>
  );
};
