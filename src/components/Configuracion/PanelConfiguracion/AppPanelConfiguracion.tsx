import { Container } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { GrConfigure } from "react-icons/gr";
import DetallesConfiguracion from "./DetallesConfiguracion/AppDetallesConfiguracion";

const AppPanelConfiguracion = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<GrConfigure />} title="Configuración" />
        <DetallesConfiguracion />
      </Container>
    </>
  );
};

export default AppPanelConfiguracion;
