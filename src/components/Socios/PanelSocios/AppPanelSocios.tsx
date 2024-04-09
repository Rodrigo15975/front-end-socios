import { Container, Panel } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { IoBusinessSharp } from "react-icons/io5";
import AppTableSocios from "./TableSocios/AppTableSocios";
import ButtonAddSocios from "./ButtonAddSocios/ButtonAddSocios";

const AppPanelSocios = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<IoBusinessSharp />} title="Socios" />
        <Panel
          buttonAddPanel={<ButtonAddSocios />}
          panel={<AppTableSocios />}
        />
      </Container>
    </>
  );
};

export default AppPanelSocios;
