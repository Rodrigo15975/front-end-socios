import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/mutation";
import {
  GetTipoUsuario,
  UpdateTipoUsuario,
} from "@/services/gestion-usuarios/tipo-usuario/types/typeTipoUsuario";
import { storeTipoUsuario } from "@/store";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ColumnsTipoUsuario = () => {
  const { mutate } = useDeleteTipoUsuario();
  const { setOpenEditFormTipoUsuario } = storeTipoUsuario();
  const [editRecord, setEditRecord] = useState<UpdateTipoUsuario | undefined>();

  const deleteTipoUsuario = (_id: string) => mutate(_id);
  const openEditForm = (record: UpdateTipoUsuario) => {
    setEditRecord(record);
    setOpenEditFormTipoUsuario();
  };

  const actionsColumns = (column: GetTipoUsuario) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => deleteTipoUsuario(_id)}
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

  const columnsTipoUsuario: ColumnProps[] = [
    { field: "tipo_usuario", header: "Tipo usuario" },
    {
      field: "acciones",
      header: "Acciones",
      body: (props: GetTipoUsuario) => actionsColumns(props),
    },
  ];

  return {
    columnsTipoUsuario,
    editRecord,
  };
};
