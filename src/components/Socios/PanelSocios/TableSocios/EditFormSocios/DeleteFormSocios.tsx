import { Button, Modal } from "@/components/Common";
import { useDeleteSocio } from "@/services/gestion-socios/socios/mutation";
import storeSocio from "@/store/storeSocios/storeSocios";
import { AnimatePresence } from "framer-motion";

const DeleteFormSocios = ({ id }: { id: string | undefined }) => {
  const { setOpeDeleteFormSocio, openDeleteFormSocio } = storeSocio();
  const { mutate } = useDeleteSocio();

  const deleteSocio = () => {
    mutate(id ?? "");
    setOpeDeleteFormSocio();
  };
  return (
    <>
      <AnimatePresence>
        {openDeleteFormSocio && (
          <Modal
            className="flex-[0_1_40rem] border-border_four rounded-md flex items-center p-4 justify-center gap-4 flex-col min-h-[20vh] border bg-white"
            type="CENTER"
            onClick={setOpeDeleteFormSocio}
            animate="LEFT"
          >
            <p className="text-[1.2rem]">La información será irreversible</p>
            <div className="w-full flex gap-4 justify-center">
              <Button
                type="button"
                label="Eliminar"
                className="flex-[0_1_10rem] font-robotoSlab_500 bg-bg_three h-[2.5rem]"
                onClick={deleteSocio}
                btnDefault
              />
              <Button
                type="button"
                label="Cancelar"
                className="flex-[0_1_10rem] font-robotoSlab_500 bg-bg_secondary/50  h-[2.5rem]"
                onClick={setOpeDeleteFormSocio}
                btnDefault
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteFormSocios;
