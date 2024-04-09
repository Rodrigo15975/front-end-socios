import { Modal } from "@/components/Common";
import { storeActividad } from "@/store";
import { AnimatePresence } from "framer-motion";
import FormActividad from "./FormActividad";

const AppFormActividad = () => {
  const { openFormActividad } = storeActividad();
  return (
    <>
      <AnimatePresence>
        {openFormActividad && (
          <Modal
            className="flex-[0_1_50rem] shadow-md min-h-[60vh] border-border_primary/50 rounded-md bg-bg_default border"
            type="CENTER"
            animate="RIGHT"
          >
            <div className="max-h-[55vh] overflow-y-auto">
              {/* Formulario Modal */}
              <FormActividad />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormActividad;
