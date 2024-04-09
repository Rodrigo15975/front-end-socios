import storeSidebarMobile from "@/store/storeSidebarMobile/storeSidebarMobile";
import { ImMenu } from "react-icons/im";
import { ButtonIcon } from "../Common";

const ButtonToggleMobile = () => {
  const { screenMobile, setToggle } = storeSidebarMobile();

  return (
    <>
      {screenMobile && (
        <ButtonIcon
          onClick={setToggle}
          className="fixed text-text_default flex items-center justify-center bottom-0 z-50 h-[4rem] w-[4rem] bg-bg_secondary/50 rounded-md border shadow-md"
        >
          <ImMenu className="text-4xl" />
        </ButtonIcon>
      )}
    </>
  );
};

export default ButtonToggleMobile;
