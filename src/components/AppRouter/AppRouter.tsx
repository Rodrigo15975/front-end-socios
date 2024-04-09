import { routerProtected, routerPublics } from "@/router";
import { Route, Routes } from "react-router-dom";
import RouterProtected from "./ProtectedRouter";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Rutas protegidas */}
      <Route element={<RouterProtected />}>
        {routerProtected.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}
      </Route>

      {routerPublics.map(({ Componente, path }) => (
        <Route key={path} path={path} element={<Componente />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
