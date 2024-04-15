import { useLogout } from "@/services/login";
import { Sidebar } from "..";
import menu from "./LinksSidebar";

const AppSidebar = () => {
  const { mutate } = useLogout();

  const logout = () => mutate();
  return (
    <>
      <Sidebar
        menu={menu.menu}
        onClickBtn={logout}
        rootStyles={{
          color: "#1816167f",
          fontFamily: '"Roboto Slab", "serif"',
          fontWeight: 500,
          border: "none",
        }}
      />
    </>
  );
};

export default AppSidebar;
