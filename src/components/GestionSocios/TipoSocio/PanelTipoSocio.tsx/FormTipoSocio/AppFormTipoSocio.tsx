import { Modal } from "@/components/Common";
import storeTipoSocio from "@/store/storeGestionSocios/tipoSocio/storeTipoSocio";
import { AnimatePresence } from "framer-motion";
import FormTipoSocio from "./FormTipoSocio";

const AppFormTipoSocio = () => {
  const { openFormTipoSocio } = storeTipoSocio();
  return (
    <>
      <AnimatePresence>
        {openFormTipoSocio && (
          <Modal
            className="flex-[0_1_50rem] shadow-md min-h-[60vh] border-border_primary/50 rounded-md bg-bg_default border"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[55vh] overflow-y-auto">
              {/* Formulario Modal */}
              <FormTipoSocio />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormTipoSocio;
