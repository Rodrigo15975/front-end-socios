import { DataTable } from "primereact/datatable";
import { Column, ColumnProps } from "primereact/column";
import { InputText } from "primereact/inputtext";

// interface Product {
//   id: string | null;
//   code: string;
//   name: string;
//   description: string;
//   image: string | null;
//   price: number;
//   category: string | null;
//   quantity: number;
//   inventoryStatus: string;
//   rating: number;
// }
const columnsConfig: ColumnProps[] = [
  { field: "ruc", header: "ruc" },
  { field: "razon_social", header: "razon social" },
  { field: "dni", header: "dni" },
  { field: "telefono", header: "telefono" },
  { field: "representate_legal", header: "representate legal" },
  { field: "usuario", header: "Usuario" },
  { field: "acciones", header: "Acciones" },
  { field: "acciones", header: "Acciones" },
  { field: "acciones", header: "Acciones" },
  { field: "acciones", header: "Acciones" },
];

const renderHeader = () => {
  return (
    <div className="flex font-robotoSlab">
      <span className=" w-full flex justify-end p-4 p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          unstyled
          security="true"
          className="border p-2"
          placeholder="Keyword Search"
        />
      </span>
    </div>
  );
};

const header = renderHeader;
const AppTableSocios = () => {
  const values = [
    {
      ruc: "12345678912",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "789456123",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },

    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
    {
      ruc: "Suidazo",
      razon_social: "asd",
      dni: "asd",
      telefono: "1",
      fecha_inscripcion: "20/5/2024",
      inventoryStatus: "",
      name: "",
      price: 2,
      quantity: 2,
      rating: 2,
    },
  ];

  return (
    <>
      <DataTable
        paginator
        value={values}
        rows={7}
        resizableColumns
        header={header}
        // Puede hacer quie aparezca el scroll cuando el max width es menor
        className="font-robotoSlab m-auto font-robotoSlab_300 max-w-[70rem]"
      >
        {columnsConfig.map((column, index) => (
          <Column
            resizeable
            headerClassName="bg-bg_secondary/80 text-text_default font-robotoSlab_400"
            key={index}
            field={column.field}
            align={"center"}
            header={column.header}
          />
        ))}
      </DataTable>
    </>
  );
};

export default AppTableSocios;
