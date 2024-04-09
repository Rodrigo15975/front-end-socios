import { Button } from "@/components/Common";
import { BiSearchAlt } from "react-icons/bi";

const ButtonSearchRucAddSocios = () => {
  return (
    <>
      <Button
        type="button"
        className="flex-[0_1_5rem] flex items-center justify-center rounded-md shadow-md outline-1 outline outline-bg_secondary/50 h-[3rem] bg-bg_five/50 hover:bg-bg_five transition"
      >
        <BiSearchAlt className="text-3xl text-text_primary/70" />
      </Button>
    </>
  );
};

export default ButtonSearchRucAddSocios;
