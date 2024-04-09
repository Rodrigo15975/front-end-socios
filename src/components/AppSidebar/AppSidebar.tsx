import { Sidebar } from "..";
import menu from "./LinksSidebar";

const AppSidebar = () => {
  return (
    <>
      <Sidebar
        menu={menu.menu}
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
