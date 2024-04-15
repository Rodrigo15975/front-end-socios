import { Column, ColumnProps } from "primereact/column";
import { DataTable, DataTableValueArray } from "primereact/datatable";

interface PropsTable<T> {
  columnsConfig: ColumnProps[];
  data: T;
  header: React.JSX.Element;
  globalFilter: string;
  className?: string;
}

const Table = <T extends DataTableValueArray | undefined>({
  columnsConfig,
  data,
  header,
  globalFilter,
  className,
}: PropsTable<T>) => {
  return (
    <>
      <DataTable
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        paginator
        value={data}
        rows={5}
        globalFilter={globalFilter}
        resizableColumns
        header={header}
        // Puede hacer quie aparezca el scroll cuando el max width es menor
        className={` ${className} font-robotoSlab shadow-lg border border-border_four/50 m-auto font-robotoSlab_300 max-w-[75rem]`}
      >
        {columnsConfig.map((column, index) => (
          <Column
            key={index}
            sortable={column.sortable}
            className="h-[4rem] p-2 border hover:bg-bg_secondary/10 transition font-robotoSlab_400 text-text_primary"
            resizeable
            headerClassName="gradient-table-bg font-robotoSlab_700"
            field={column.field}
            align={"center"}
            body={column.body}
            header={column.header}
          />
        ))}
      </DataTable>
    </>
  );
};

export default Table;
