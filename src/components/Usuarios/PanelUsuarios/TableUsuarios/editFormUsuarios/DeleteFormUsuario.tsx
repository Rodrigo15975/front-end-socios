import { Button, Modal } from "@/components/Common";
import { useDeleteUsuario } from "@/services/gestion-usuarios/usuarios/mutation";
import storeUsuario from "@/store/storeUsuarios/storeUsuarios";
import { AnimatePresence } from "framer-motion";

const DeleteFormUsuario = ({ id }: { id: string | undefined }) => {
  const { setOpeDeleteFormUsuario, openDeleteFormUsuario } = storeUsuario();
  const { mutate } = useDeleteUsuario();

  const deleteUsuario = () => {
    mutate(id ?? "");
    setOpeDeleteFormUsuario();
  };

  return (
    <>
      <AnimatePresence>
        {openDeleteFormUsuario && (
          <Modal
            className="flex-[0_1_40rem] border-border_four rounded-md flex items-center p-4 justify-center gap-4 flex-col min-h-[20vh] border bg-white"
            type="CENTER"
            onClick={setOpeDeleteFormUsuario}
            animate="LEFT"
          >
            <p className="text-[1.2rem]">La información será irreversible</p>
            <div className="w-full flex gap-4 justify-center">
              <Button
                type="button"
                label="Eliminar"
                className="flex-[0_1_10rem] font-robotoSlab_500 bg-bg_three h-[2.5rem]"
                onClick={deleteUsuario}
                btnDefault
              />
              <Button
                type="button"
                label="Cancelar"
                className="flex-[0_1_10rem] font-robotoSlab_500 bg-bg_secondary/50  h-[2.5rem]"
                onClick={setOpeDeleteFormUsuario}
                btnDefault
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteFormUsuario;
