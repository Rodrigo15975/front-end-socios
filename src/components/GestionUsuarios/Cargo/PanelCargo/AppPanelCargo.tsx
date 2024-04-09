import { Container } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { BiBookmarkAlt } from "react-icons/bi";
import AppTableCargo from "./TableCargo/AppTableCargo";
import ButtonAddCargo from "./ButtonAddCargo/ButtonAddCargo";
import Panel from "@/components/Common/Panel/Panel";
import AppFormCargo from "./FormCargo/AppFormCargo";

const AppPanelCargo = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<BiBookmarkAlt />} title="Cargo" />
        <Panel buttonAddPanel={<ButtonAddCargo />} panel={<AppTableCargo />} />
      </Container>
      <div>
        <AppFormCargo />
      </div>
    </>
  );
};

export default AppPanelCargo;
