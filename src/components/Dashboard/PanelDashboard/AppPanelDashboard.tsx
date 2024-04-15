import { Container } from "@/components/Common";
import { GrDashboard } from "react-icons/gr";
import HeaderDashboard from "../HeaderDashboard";
import ActionFastDashboard from "./ActionsFastDashboard";
import AppEstadisticas from "./Estadisticas/AppEstadisticas";
import AccountEstadisticas from "./AccountEstadisticas";

const AppPanelDashboard = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<GrDashboard />} title="Dashboard" />
        <div className="max-h-[75vh] overflow-y-auto mt-4">
          <ActionFastDashboard />
          <div className="flex min-h-[50vh] mt-4 justify-evenly gap-8 items-center p-8">
            <AppEstadisticas />
            <AccountEstadisticas />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AppPanelDashboard;
