import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import {
  GetUsuarios,
  UpdateUsuario,
} from "@/services/gestion-usuarios/usuarios/types/typesUsuarios";
import storeUsuario from "@/store/storeUsuarios/storeUsuarios";
import { ColumnProps } from "primereact/column";

import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ColumnsUsuarios = () => {
  const [editRecord, setEditRecord] = useState<UpdateUsuario>();
  const [idDelete, setIdDelete] = useState<string>();

  const { setOpenEditFormUsuario, setOpeDeleteFormUsuario } = storeUsuario();

  const openEditForm = (record: UpdateUsuario) => {
    setEditRecord(record);
    setOpenEditFormUsuario();
  };

  const openDeleteForm = (id: string) => {
    setIdDelete(id);
    setOpeDeleteFormUsuario();
  };

  const actionsColumns = (column: GetUsuarios) => {
    const { _id } = column;
    return (
      <>
        <div className="flex justify-center gap-4">
          <CommonTooltip title="Eliminar">
            <Button
              type="button"
              btnDefault
              onClick={() => openDeleteForm(_id)}
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
  const columnsUsuarios: ColumnProps[] = [
    {
      field: "dni",
      header: "Dni",
      sortable: true,
    },
    { field: "nombres", header: "Nombres" },
    { field: "apellidos", header: "Apellidos" },
    { field: "id_tipo.tipo_usuario", header: "Tipo" },
    { field: "id_cargo.cargo", header: "Cargo" },
    { field: "celular", header: "Celular" },
    {
      field: "acciones",
      header: "Acciones",
      body: (props: GetUsuarios) => actionsColumns(props),
    },
  ];

  return {
    columnsUsuarios,
    editRecord,
    idDelete,
  };
};

export default ColumnsUsuarios;
