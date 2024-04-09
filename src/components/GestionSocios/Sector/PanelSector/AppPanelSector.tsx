import { Container } from "@/components/Common";
import Panel from "@/components/Common/Panel/Panel";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { IoBusinessSharp } from "react-icons/io5";
import ButtonAddSector from "./ButtonAddSector/ButtonAddSector";
import AppTableSector from "./TableSector/AppTableSector";
import AppFormSector from "./FormSector/AppFormSector";

const AppPanelSector = () => {
  return (
    <>
      <Container>
        <HeaderDashboard
          
          iconTitle={<IoBusinessSharp />}
          title="Sector"
        />
        <Panel
          buttonAddPanel={<ButtonAddSector />}
          panel={<AppTableSector />}
        />
      </Container>
      {/* Formulario Sector */}
      <div>
        <AppFormSector/>
      </div>
    </>
  );
};

export default AppPanelSector;
