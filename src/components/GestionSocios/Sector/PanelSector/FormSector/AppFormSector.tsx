import { Modal } from "@/components/Common";
import storeSector from "@/store/storeGestionSocios/sector/storeSector";
import { AnimatePresence } from "framer-motion";
import FormSector from "./FormSector";

const AppFormSector = () => {
  const { openFormSector } = storeSector();
  return (
    <>
      <AnimatePresence>
        {openFormSector && (
          <Modal
            className="flex-[0_1_50rem] shadow-md min-h-[60vh] border-border_primary/50 rounded-md bg-bg_default border"
            type="CENTER"
            animate="TOP"
          >
            <div className="max-h-[55vh] overflow-y-auto">
              {/* Formulario Modal */}
              <FormSector />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormSector;
