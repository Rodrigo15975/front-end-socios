import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { Container } from "../../Common";
import { TbReportSearch } from "react-icons/tb";

const AppPanelReportes = () => {
  return (
    <>
      <Container>
        <HeaderDashboard iconTitle={<TbReportSearch />} title="Reportes" />
      </Container>
    </>
  );
};

export default AppPanelReportes;
