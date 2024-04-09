import { Container } from "@/components/Common";
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
        <div className="flex flex-wrap min-h-[82vh] p-8">
          <ButtonAddTipoUsuario />
          <AppTableTipoUsuario />
        </div>
      </Container>
      {/* Formulario de tipo usuario */}
      <div>
        <AppFormTipoUsuario />
      </div>
    </>
  );
};

export default AppPanelTipoUsuario;
