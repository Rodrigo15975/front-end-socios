import { Container } from "@/components/Common";
import Panel from "@/components/Common/Panel/Panel";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { BsActivity } from "react-icons/bs";
import ButtonAddActividad from "./ButtonAddActividad/ButtonAddActividad";
import AppTableActividad from "./TableActividad/AppTableActividad";
import AppFormActividad from "./FormActividad/AppFormActividad";

const AppPanelSector = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<BsActivity />} title="Actividad" />
        <Panel
          buttonAddPanel={<ButtonAddActividad />}
          panel={<AppTableActividad />}
        />
      </Container>
      {/* Formulario modal de actividad */}
      <div>
        <AppFormActividad />
      </div>
    </>
  );
};

export default AppPanelSector;
