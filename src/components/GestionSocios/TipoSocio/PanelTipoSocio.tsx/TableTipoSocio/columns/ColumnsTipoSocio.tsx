import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteTipoSocio } from "@/services/gestion-socios/tipo-socios/mutation";
import {
  GetTipoSocios,
  UpdateTipoSocio,
} from "@/services/gestion-socios/tipo-socios/types/typeTipoSocios";
import { storeTipoSocio } from "@/store";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ColumnsTiposSocios = () => {
  const { mutate } = useDeleteTipoSocio();

  const [editRecord, setEditRecord] = useState<UpdateTipoSocio>();
  
  const { setOpenEditFormTipoSocio } = storeTipoSocio();

  const deleteTipoSocio = (id: string) => mutate(id);

  const openEditForm = (record: UpdateTipoSocio) => {
    setEditRecord(record);
    setOpenEditFormTipoSocio();
  };

  const actionsColumns = (column: GetTipoSocios) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteTipoSocio(_id)}
              className="flex-[0_1_5rem] p-2 flex justify-center bg-bg_three/50 hover:text-text_default hover:bg-bg_three text-text_primary"
            >
              <RiDeleteBin6Line className="text-2xl" />
            </Button>
          </CommonTooltip>
          <CommonTooltip title="Editar">
            <Button
              type="button"
              onClick={() => openEditForm(column)}
              btnDefault
              className="flex-[0_1_5rem] p-2 flex items-center justify-center bg-bg_secondary/50 hover:bg-bg_secondary hover:text-text_default"
            >
              <BiEditAlt className="text-2xl" />
            </Button>
          </CommonTooltip>
        </div>
      </>
    );
  };

  const columnsTipoSocio: ColumnProps[] = [
    {
      field: "socio",
      header: "Socio",
    },
    {
      field: "acciones",
      header: "Acciones",

      body: (props: GetTipoSocios) => actionsColumns(props),
    },
  ];
  return {
    editRecord,
    columnsTipoSocio,
  };
};
