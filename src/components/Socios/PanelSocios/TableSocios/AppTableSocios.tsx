import Table from "@/components/Table/Table";
import { useGetSocios } from "@/services/gestion-socios/socios/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import ColumnsSocios from "./ColumnsSocios/ColumnsSocios";
import DeleteFormSocios from "./EditFormSocios/DeleteFormSocios";
import EditFormSocios from "./EditFormSocios/EditFormSocios";
import ExportExcelSocios from "./ExportExcelSocios";

const AppTableSocios = () => {
  const { data } = useGetSocios();
  const { columnsSocios, idDelete, editRecord } = ColumnsSocios();
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-between">
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
      <ExportExcelSocios />
    </div>
  );

  return (
    <>
      <EditFormSocios editRecord={editRecord} />
      <Table
        className="max-w-[100%]"
        globalFilter={globalFilter}
        header={header}
        columnsConfig={columnsSocios}
        data={data}
      />
      <DeleteFormSocios id={idDelete} />
    </>
  );
};

export default AppTableSocios;
