import Layout from "@/Layout/Layout";
import { PathsPublic } from "@/router/enum/routerPaths";
import storeAuth from "@/store/auth/storeAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RouterProtected = () => {
  const location = useLocation();
  const { isAuth } = storeAuth();
  if (isAuth)
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  return (
    <Navigate
      to={PathsPublic.INICIO}
      replace
      // Obtiene el valor de la ubicacion de donde proviene antes de redireccionarlo
      state={{ from: location }}
    />
  );
};

export default RouterProtected;
