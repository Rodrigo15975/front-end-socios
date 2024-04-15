import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteCargo } from "@/services/gestion-usuarios/cargo/mutation";
import {
  GetCargos,
  UpdateCargo,
} from "@/services/gestion-usuarios/cargo/types/typeCargo";
import { storeCargo } from "@/store";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ColumnsCargo = () => {
  const { mutate } = useDeleteCargo();

  const [editRecord, setEditRecord] = useState<UpdateCargo>();
  const { setOpenEditFormCargo } = storeCargo();

  const deleteCargo = (id: string) => mutate(id);
  const openEditForm = (record: UpdateCargo) => {
    setEditRecord(record);
    setOpenEditFormCargo();
  };

  const actionsColumns = (column: GetCargos) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteCargo(_id)}
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

  const columnsCargo: ColumnProps[] = [
    { field: "cargo", header: "Cargo" },
    {
      field: "acciones",
      header: "Acciones",

      body: (props: GetCargos) => actionsColumns(props),
    },
  ];

  return {
    columnsCargo,
    editRecord,
  };
};
