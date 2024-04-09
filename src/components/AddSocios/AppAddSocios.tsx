import { m } from "framer-motion";
import AppPanelAddSocios from "./PanelAddSocios/AppPanelAddSocios";
import { variantsPages } from "../Common";

const AppAddSocios = () => {
  return (
    <m.div
      className="w-full"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variantsPages}
    >
      <AppPanelAddSocios />
    </m.div>
  );
};

export default AppAddSocios;
