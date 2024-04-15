import { Container, Panel } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { GrUserExpert } from "react-icons/gr";
import AppTableTipoUsuario from "./TableTipoUsuario/AppTableTipoUsuario";
import ButtonAddTipoUsuario from "./ButtonAddTipoUsuario/ButtonAddTipoUsuario";
import AppFormTipoUsuario from "./FormTipoUsuario/AppFormTipoUsuario";

const AppPanelTipoUsuario = () => {
  return (
    <>
      <Container>
        <HeaderDashboard title="Tipo Usuario" iconTitle={<GrUserExpert />} />
        <Panel
          panel={<AppTableTipoUsuario />}
          buttonAddPanel={<ButtonAddTipoUsuario />}
        />
      </Container>
      {/* Formulario de tipo usuario */}
      <div>
        <AppFormTipoUsuario />
      </div>
    </>
  );
};

export default AppPanelTipoUsuario;
