import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteSector } from "@/services/gestion-socios/sector/mutation";
import {
  GetSector,
  UpdateSector,
} from "@/services/gestion-socios/sector/types/typeSector";
import { storeSector } from "@/store";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ColumnsSector = () => {
  const { mutate } = useDeleteSector();
  const [editRecord, setEditRecord] = useState<UpdateSector>();
  const { setOpenEditFormSector } = storeSector();

  const deleteSector = (id: string) => mutate(id);

  const openEditForm = (record: UpdateSector) => {
    setEditRecord(record);
    setOpenEditFormSector();
  };

  const actionsColumns = (column: GetSector) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteSector(_id)}
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

  const columnsSector: ColumnProps[] = [
    { field: "sector", header: "Sector" },
    {
      field: "acciones",
      header: "Acciones",

      body: (props: GetSector) => actionsColumns(props),
    },
  ];
  return {
    editRecord,
    columnsSector,
  };
};
