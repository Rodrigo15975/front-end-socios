import { Container } from "@/components/Common";
import HeaderDashboard from "../HeaderDashboard";
import { GrDashboard } from "react-icons/gr";

const AppPanelDashboard = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<GrDashboard />} title="Dashboard" />
      </Container>
    </>
  );
};

export default AppPanelDashboard;
