import { storeOpenProfile } from "@/store";
import { Drawer } from "antd";
import { FC, ReactNode } from "react";
import { Header } from "../Common";
import DetallesProfile from "../Common/Header/Profile/DetallesProfile";

type PropsHeaderDashboard = {
  title: string;
  iconTitle: ReactNode;
};

const HeaderDashboard: FC<PropsHeaderDashboard> = ({ iconTitle, title }) => {
  const { setOpenProfile, openProfile } = storeOpenProfile();
  return (
    <>
      {/* Icon del header y nombre */}
      <Header title={title} iconTitle={iconTitle} />
      {/* Perfil informacion */}
      <Drawer
        size="large"
        style={{
          fontFamily: '"Roboto Slab", "serif"',
        }}
        styles={{
          mask: {
            background: "#ffffff83",
            boxShadow: "none",
          },
          wrapper: {
            boxShadow: "0 0 1px",
          },
        }}
        title="Información del Perfil"
        open={openProfile}
        onClose={setOpenProfile}
      >
        {/* Detalles */}
        <DetallesProfile />
      </Drawer>
    </>
  );
};

export default HeaderDashboard;
