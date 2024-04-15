import Table from "@/components/Table/Table";
import { useGetSector } from "@/services/gestion-socios/sector/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ColumnsSector } from "./Columns/ColumnsSector";
import EditFormSector from "./EditFormSector/EditFormSector";

const AppTableSector = () => {
  const { data } = useGetSector();
  const { columnsSector, editRecord } = ColumnsSector();
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const newData = data?.filter((sector) => sector.sector !== "NINGUNA");

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
      <EditFormSector editRecord={editRecord} />
      <Table
        columnsConfig={columnsSector}
        data={newData}
        globalFilter={globalFilter}
        header={header}
      />
    </>
  );
};

export default AppTableSector;
