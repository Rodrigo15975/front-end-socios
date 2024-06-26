import { Container } from "@/components/Common";
import Panel from "@/components/Common/Panel/Panel";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import ButtonAddTipoSocio from "./ButtonAddTipoSocio/ButtonAddTipoSocio";
import AppFormTipoSocio from "./FormTipoSocio/AppFormTipoSocio";
import AppTableTipoSocio from "./TableTipoSocio/AppTableTipoSocio";

const AppPanelTipoSocio = () => {
  return (
    <>
      <Container>
        <HeaderDashboard
          iconTitle={<BsFillBookmarkPlusFill />}
          title="Tipo de Socio"
        />
        <Panel
          buttonAddPanel={<ButtonAddTipoSocio />}
          panel={<AppTableTipoSocio />}
        />
      </Container>
      {/* Form,ulario modal de Tiposocio */}
      <div>
        <AppFormTipoSocio />
      </div>
    </>
  );
};

export default AppPanelTipoSocio;
