import { Button } from "@/components/Common";
import { useGetSocios } from "@/services/gestion-socios/socios/queries";
import * as XLSX from "xlsx";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";

const ExportExcelSocios = () => {
  const { data } = useGetSocios();

  const handleExportExcel = () => {
    // Mapear cada objeto de `data` para seleccionar y transformar los datos necesarios
    const excelData = data?.map((item) => ({
      celular: item.celular,
      correo: item.correo,
      departamento: item.departamento,
      direccion1: item.direccion1,
      direccion2: item.direccion2,
      distrito: item.distrito,
      dni: item.dni,
      actividad: item.id_actividad.actividad,
      tipo_socio: item.id_tipo_socio.socio,
      sector: item.id_sector.sector,
      fecha_inicio_actividades: item.fecha_inicio_actividades,
      fecha_inscripcion: item.fecha_inscripcion,
      partida_registral: item.partida_registral,
      provincia: item.provincia,
      razon_social: item.razon_social,
      representante_legal: item.representante_legal,
      ruc: item.ruc,
      telefono: item.telefono,
    }));

    // crear un nuevo libro de Excel
    const workbook = XLSX.utils.book_new();

    // convertir los datos a una hoja de trabajo de Excel
    const worksheet = XLSX.utils.json_to_sheet(excelData ?? []);

    // Agregar la hoja de trabajo al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "Socios");

    // Crear un blob para descargar el archivo Excel
    const blob = new Blob([XLSX.write(workbook, { type: "buffer" })], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Crear una URL para el blob y descargar el archivo
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "socios.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <CommonTooltip
        title="Descargar a excel"
        className="flex items-center flex-[0_1_4rem] justify-end"
      >
        <Button
          onClick={handleExportExcel}
          type="button"
          className="flex-[0_1_3rem] flex justify-center items-center h-[2.7rem] bg-bg_secondary/50 hover:bg-bg_secondary/90 shadow-md hover:shadow-none transition rounded-md text-text_default font-robotoSlab_600"
        >
          <PiMicrosoftExcelLogoDuotone className="text-2xl" />
        </Button>
      </CommonTooltip>
    </>
  );
};

export default ExportExcelSocios;
