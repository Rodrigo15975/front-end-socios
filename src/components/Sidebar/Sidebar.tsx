import { FC, useEffect } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { PropsSidebar } from "./types/typesLinks";

import { useGetEmpresa } from "@/services/configuracion";
import storeSidebarMobile from "@/store/storeSidebarMobile/storeSidebarMobile";
import { Avatar } from "antd";
import { CiImageOn } from "react-icons/ci";
import { TiArrowBack } from "react-icons/ti";
import { Button } from "..";

const SidebarMenu: FC<PropsSidebar> = ({
  menu,
  rootStyles,
  icon,
  onClickBtn,
}) => {
  const {
    setToggle,
    setCollapse,
    setScreenMobile,
    screenMobile,
    toggle,
    collapse,
  } = storeSidebarMobile();
  const { data } = useGetEmpresa();
  // Verifica si la pantalla es 926px y esconde el sidebar
  useEffect(() => {
    const handleResize = () => {
      setScreenMobile();
      setScreenMobile();
      setCollapse();
      setCollapse();
    };
    // Verificar si el ancho de la ventana es menor o igual a 926px

    // Llamar a handleResize cuando se carga la página y cuando se cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener en la limpieza del efecto para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapse, setScreenMobile]);

  return (
    <>
      <div className="bg-bg_default min-h-screen ">
        <Sidebar
          style={{
            background: "linear-gradient(190deg, #ffffff 100%#ffffffea 100%)",
            height: "100%",
          }}
          collapsed={collapse}
          backgroundColor={screenMobile ? "white" : ""}
          toggled={toggle}
          onBackdropClick={() => setToggle()}
          rootStyles={{ ...rootStyles }}
          className="min-h-screen bg-bg_default flex flex-col justify-between shadow-xl border"
          // 992px
          breakPoint="xl"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center flex-col py-8 justify-center ">
                <Avatar
                  src={
                    data?.logo ? (
                      data.logo
                    ) : (
                      <CiImageOn className="text-text_primary text-2xl" />
                    )
                  }
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  icon={icon}
                  className="bg-blue-400/10 border"
                />
              </div>
              <p className="border-b border-t py-2 px-[1rem] my-[1rem] text-text_primary/80 font-robotoSlab_600">
                Menu
              </p>
              <Menu>
                {menu.map((link) => (
                  <div key={`${link.path}-menu`}>
                    <MenuItem
                      icon={link.icon}
                      component={<NavLink to={link.path}></NavLink>}
                    >
                      {link.label}
                    </MenuItem>

                    {link.subMenu && (
                      <SubMenu
                        icon={link.subMenu[0].iconSubMenu}
                        label={link.subMenu[0].labelSubMenu}
                      >
                        {link.subMenu?.map((subMenu) => (
                          <MenuItem
                            key={subMenu.path}
                            icon={subMenu.icon}
                            component={<NavLink to={subMenu.path}></NavLink>}
                          >
                            {subMenu.label}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    )}
                  </div>
                ))}
              </Menu>
            </div>
            <div className="w-full">
              <Button
                type="button"
                className="w-full hover:opacity-60 transition flex active p-3 items-center justify-center"
                onClick={onClickBtn}
              >
                <TiArrowBack className="text-4xl" />
              </Button>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarMenu;
