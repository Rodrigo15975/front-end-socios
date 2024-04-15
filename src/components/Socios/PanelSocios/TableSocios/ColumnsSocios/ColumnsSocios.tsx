import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import {
  GetSocios,
  UpdateSocio,
} from "@/services/gestion-socios/socios/types/typesSocios";
import storeSocio from "@/store/storeSocios/storeSocios";
import { ColumnProps } from "primereact/column";
import { useState } from "react";

import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
const ColumnsSocios = () => {
  const [idDelete, setIdDelete] = useState<string>();
  const [editRecord, setEditRecord] = useState<UpdateSocio>();
  const { setOpeDeleteFormSocio, setOpenEditFormSocio } = storeSocio();

  const deleteSocio = (id: string) => {
    setIdDelete(id);
    setOpeDeleteFormSocio();
  };

  const openEditForm = (record: UpdateSocio) => {
    setEditRecord(record);
    setOpenEditFormSocio();
  };

  const actionsColumns = (column: GetSocios) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar" position="leftBottom">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteSocio(_id)}
              className="flex-[0_1_5rem] p-2 flex justify-center bg-bg_three/10 hover:text-text_default hover:bg-bg_three text-text_primary"
            >
              <RiDeleteBin6Line className="text-2xl" />
            </Button>
          </CommonTooltip>
          <CommonTooltip title="Editar" position="topRight">
            <Button
              type="button"
              onClick={() => openEditForm(column)}
              btnDefault
              className="flex-[0_1_5rem] p-2 flex items-center justify-center bg-bg_secondary/10 hover:bg-bg_secondary hover:text-text_default"
            >
              <BiEditAlt className="text-2xl" />
            </Button>
          </CommonTooltip>
        </div>
      </>
    );
  };
  const columnsSocios: ColumnProps[] = [
    { field: "ruc", header: "Ruc", sortable: true },
    { field: "dni", header: "Dni", sortable: true },
    {
      field: "representante_legal",
      header: "Presentante legal",
      sortable: true,
    },
    { field: "razon_social", header: "Razón Social" },
    { field: "id_tipo_socio.socio", header: "Tipo Socio", sortable: true },
    { field: "id_sector.sector", header: "Sector", sortable: true },
    { field: "id_actividad.actividad", header: "Actividad", sortable: true },
    { field: "fecha_inscripcion", header: "Inscripción", sortable: true },
    {
      field: "fecha_inicio_actividades",
      header: "Inicio Actividades",
      sortable: true,
    },
    {
      field: "acciones",
      header: "Acciones",

      body: (data: GetSocios) => actionsColumns(data),
    },
  ];

  return { columnsSocios, idDelete, editRecord };
};

export default ColumnsSocios;
