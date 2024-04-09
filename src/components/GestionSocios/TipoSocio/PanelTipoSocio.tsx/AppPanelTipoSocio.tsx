import { Container } from "@/components/Common";
import Panel from "@/components/Common/Panel/Panel";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import AppTableTipoSocio from "./TableTipoSocio/AppTableSector";
import ButtonAddTipoSocio from "./ButtonAddTipoSocio/ButtonAddTipoSocio";
import AppFormTipoSocio from "./FormTipoSocio/AppFormTipoSocio";

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
