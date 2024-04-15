import Table from "@/components/Table/Table";
import { useGetCargos } from "@/services/gestion-usuarios/cargo/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ColumnsCargo } from "./Columns/ColumnsCargo";
import FormEditCargo from "./FormEditCargo/FormEditCargo";

const AppTableCargo = () => {
  const { data } = useGetCargos();
  const { columnsCargo, editRecord } = ColumnsCargo();

  const [globalFilter, setGlobalFilter] = useState<string>("");

  const capitalizedData = data?.filter((item) => item.cargo !== "SIN CARGO");

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
      <FormEditCargo editRecord={editRecord} />
      <Table
        globalFilter={globalFilter}
        columnsConfig={columnsCargo}
        data={capitalizedData}
        header={header}
      />
    </>
  );
};

export default AppTableCargo;
