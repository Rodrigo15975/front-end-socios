import Table from "@/components/Table/Table";
import { useGetUsuario } from "@/services/gestion-usuarios/usuarios/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import ColumnsUsuarios from "./columns/ColumnsUsuarios";
import DeleteFormUsuario from "./editFormUsuarios/DeleteFormUsuario";
import EditFormUsuarios from "./editFormUsuarios/EditFormUsuarios";

const AppTableUsuarios = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const { columnsUsuarios, editRecord, idDelete } = ColumnsUsuarios();
  const { data } = useGetUsuario();

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          placeholder="Search..."
          className="border p-4"
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setGlobalFilter(target.value);
          }}
        />
      </span>
    </div>
  );

  return (
    <>
      {<EditFormUsuarios editRecord={editRecord} />}
      <Table
        globalFilter={globalFilter}
        columnsConfig={columnsUsuarios}
        data={data}
        header={header}
      />
      <DeleteFormUsuario id={idDelete} />
    </>
  );
};

export default AppTableUsuarios;
