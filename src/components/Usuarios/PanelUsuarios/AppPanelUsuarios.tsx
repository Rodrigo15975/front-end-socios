import { Container, Panel } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { BiUserCircle } from "react-icons/bi";
import ButtonAddUsuarios from "./ButtonAddUsuarios/ButtonAddUsuarios";
import AppTableUsuarios from "./TableUsuarios/AppTableUsuarios";

const AppPanelUsuarios = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<BiUserCircle />} title="Usuarios" />
        <Panel
          buttonAddPanel={<ButtonAddUsuarios />}
          panel={<AppTableUsuarios />}
        />
      </Container>
    </>
  );
};

export default AppPanelUsuarios;
