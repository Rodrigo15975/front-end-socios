import Table from "@/components/Table/Table";
import { useGetTipoSocio } from "@/services/gestion-socios/tipo-socios/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import EditFormTipoSocio from "./FormEditTipoSocio/FormEditTipoSocio";
import { ColumnsTiposSocios } from "./columns/ColumnsTipoSocio";

const AppTableTipoSocio = () => {
  const { data } = useGetTipoSocio();
  const { columnsTipoSocio, editRecord } = ColumnsTiposSocios();

  const newData = data?.filter((tipoSocio) => tipoSocio.socio !== "NINGUNA");

  const [globalFilter, setGlobalFilter] = useState<string>("");
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
      <EditFormTipoSocio editRecord={editRecord} />
      <Table
        data={newData}
        globalFilter={globalFilter}
        header={header}
        columnsConfig={columnsTipoSocio}
      />
    </>
  );
};

export default AppTableTipoSocio;
