import { Modal } from "@/components/Common";
import { storeCargo } from "@/store";
import { AnimatePresence } from "framer-motion";
import FormCargo from "./FormCargo";

const AppFormCargo = () => {
  const { openFormCargo } = storeCargo();
  return (
    <>
      <AnimatePresence>
        {openFormCargo && (
          <Modal
            className="flex-[0_1_50rem] shadow-md min-h-[60vh] border-border_primary/50 rounded-md bg-bg_default border"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <div className="max-h-[55vh] overflow-y-auto">
              {/* Formulario Modal */}
              <FormCargo />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormCargo;
