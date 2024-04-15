import Table from "@/components/Table/Table";
import { useGetTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ColumnsTipoUsuario } from "./Columns/ColumnsTipoUsuario";
import FormEditTipoUsuario from "./FormEditTipoUsuario";
const AppTableTipoUsuario = () => {
  const { data } = useGetTipoUsuario();

  const { columnsTipoUsuario, editRecord } = ColumnsTipoUsuario();

  const [globalFilter, setGlobalFilter] = useState<string>("");
  const newData = data?.filter((item) => item.tipo_usuario !== "SIN TIPO");

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
      <FormEditTipoUsuario editRecord={editRecord} />
      <Table
        columnsConfig={columnsTipoUsuario}
        data={newData}
        globalFilter={globalFilter}
        header={header}
      />
    </>
  );
};

export default AppTableTipoUsuario;
