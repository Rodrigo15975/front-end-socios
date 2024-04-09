import { Modal } from "@/components/Common";
import { storeTipoUsuario } from "@/store";
import { AnimatePresence } from "framer-motion";
import FormTipoUsuario from "./FormTipoUsuario";

const AppFormTipoUsuario = () => {
  const { openFormTipoUsuario } = storeTipoUsuario();
  return (
    <>
      <AnimatePresence>
        {openFormTipoUsuario && (
          <Modal
            className="flex-[0_1_50rem] shadow-md min-h-[60vh] border-border_primary/50 rounded-md bg-bg_default border"
            type="CENTER"
            animate="TOP"
          >
            <div className="max-h-[55vh] overflow-y-auto">
              {/* Formulario Modal */}
              <FormTipoUsuario />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormTipoUsuario;
