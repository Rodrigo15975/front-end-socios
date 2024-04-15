import { useGetActividad } from "@/services/gestion-socios/actividad/queries";
import { useGetSector } from "@/services/gestion-socios/sector/queries";
import { useGetTipoSocio } from "@/services/gestion-socios/tipo-socios/queries";

const RegisterFormSectorActvidadSocio = () => {
  const sector = useGetSector();
  const actividad = useGetActividad();
  const socio = useGetTipoSocio();

  const Sector = () => {
    return (
      <>
        <option value="">Seleccione</option>
        {sector.data?.map((sector) => (
          <option key={sector._id} value={sector.sector}>
            {sector.sector}
          </option>
        ))}
      </>
    );
  };
  const Actividad = () => {
    return (
      <>
        <option value="">Seleccione</option>
        {actividad.data?.map((actividad) => (
          <option key={actividad._id} value={actividad.actividad}>
            {actividad.actividad}
          </option>
        ))}
      </>
    );
  };
  const Socio = () => {
    return (
      <>
        <option value="">Seleccione</option>
        {socio.data?.map((socio) => (
          <option key={socio._id} value={socio.socio}>
            {socio.socio}
          </option>
        ))}
      </>
    );
  };

  return {
    Sector,
    Socio,
    Actividad,
  };
};

const EditFormSectorActvidadSocio = () => {
  const sector = useGetSector();
  const actividad = useGetActividad();
  const socio = useGetTipoSocio();

  const EditSector = () => {
    return (
      <>
        {sector.data?.map((sector) => (
          <option key={sector._id} value={sector.sector}>
            {sector.sector}
          </option>
        ))}
      </>
    );
  };
  const EditActividad = () => {
    return (
      <>
        {actividad.data?.map((actividad) => (
          <option key={actividad._id} value={actividad.actividad}>
            {actividad.actividad}
          </option>
        ))}
      </>
    );
  };
  const EditSocio = () => {
    return (
      <>
        {socio.data?.map((socio) => (
          <option key={socio._id} value={socio.socio}>
            {socio.socio}
          </option>
        ))}
      </>
    );
  };

  return {
    EditSector,
    EditSocio,
    EditActividad,
  };
};

export { EditFormSectorActvidadSocio, RegisterFormSectorActvidadSocio };
