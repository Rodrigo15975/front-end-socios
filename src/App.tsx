import "./App.css";
import { AppRouter } from "./components/AppRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <>
      <AppRouter />
      <ToastContainer
        draggable={true}
        autoClose={1500}
        position="top-center"
        toastClassName={"font-robotoSlab text-text_primary/80"}
      />
    </>
  );
}

export default App;
