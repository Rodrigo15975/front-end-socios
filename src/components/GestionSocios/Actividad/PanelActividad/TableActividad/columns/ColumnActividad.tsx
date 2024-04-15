import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteActividad } from "@/services/gestion-socios/actividad/mutation";
import {
  GetActividad,
  UpdateActividad,
} from "@/services/gestion-socios/actividad/types/typeActividad";
import { storeActividad } from "@/store";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ColumnsActividad = () => {
  const { mutate } = useDeleteActividad();

  const [editRecord, setEditRecord] = useState<UpdateActividad>();
  const { setOpenEditFormActividad } = storeActividad();

  const deleteActividad = (id: string) => mutate(id);
  const openEditForm = (record: UpdateActividad) => {
    setEditRecord(record);
    setOpenEditFormActividad();
  };

  const actionsColumns = (column: GetActividad) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteActividad(_id)}
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

  const columnsActividad: ColumnProps[] = [
    { field: "actividad", header: "Actividad" },
    {
      field: "acciones",
      header: "Acciones",

      body: (props: GetActividad) => actionsColumns(props),
    },
  ];

  return {
    columnsActividad,
    editRecord,
  };
};
