import { Container, Panel, variantsPages } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { m } from "framer-motion";
import { BiUserCircle } from "react-icons/bi";
import ButtonBackPanelUsuario from "./ButtonBackPanelUsuario/ButtonBackPanelUsuario";
import AppFormRegistroAddUsuario from "./FormRegistroAddUsuario/AppFormRegistroAddUsuario";

const AppAddPanelUsuario = () => {
  return (
    <>
      <m.div
        className="w-full flex items-center"
        variants={variantsPages}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Container>
          <HeaderDashboard
            iconTitle={<BiUserCircle />}
            title="Nuevos Usuarios"
          />
          <Panel
            buttonAddPanel={<ButtonBackPanelUsuario />}
            panel={<AppFormRegistroAddUsuario />}
          />
        </Container>
      </m.div>
    </>
  );
};

export default AppAddPanelUsuario;
