// import { Sidebar } from "@/components/Sidebar";
import { AppSidebar, variantsPages } from "@/components";
import ButtonToggleMobile from "@/components/AppSidebar/ButtonToggleMobile";
import { m } from "framer-motion";
import { FC, PropsWithChildren } from "react";

// Configuras a tu gusto
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <m.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variantsPages}
      className="flex bg-bg_secondary/10"
    >
      <ButtonToggleMobile />
      <AppSidebar />
      {children}
    </m.main>
  );
};

export default Layout;
