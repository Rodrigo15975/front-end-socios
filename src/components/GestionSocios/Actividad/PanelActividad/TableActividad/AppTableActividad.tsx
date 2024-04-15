import Table from "@/components/Table/Table";
import { useGetActividad } from "@/services/gestion-socios/actividad/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ColumnsActividad } from "./columns/ColumnActividad";
import EditFormActividad from "./editFormActividad/EditFormActividad";

const AppTableActividad = () => {
  const { data } = useGetActividad();
  const { columnsActividad, editRecord } = ColumnsActividad();

  const [globalFilter, setGlobalFilter] = useState<string>("");

  const newData = data?.filter(
    (actividad) => actividad.actividad !== "NINGUNA"
  );

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
      <EditFormActividad editRecord={editRecord} />
      <Table
        header={header}
        columnsConfig={columnsActividad}
        data={newData}
        globalFilter={globalFilter}
      />
    </>
  );
};

export default AppTableActividad;
