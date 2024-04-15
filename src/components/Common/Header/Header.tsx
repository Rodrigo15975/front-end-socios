import { FC, ReactNode } from "react";
import { Profile, Title } from "..";
// import FormEditDetallesProfile from "./FormEditDetallesProfile";

type PropsHeader = {
  title: string;
  iconTitle?: ReactNode;
};

const Header: FC<PropsHeader> = ({ title, iconTitle }) => {
  return (
    <>
      <div className="border justify-between rounded-md bg-bg_primary font-robotoSlab_500 flex items-center p-4 border-primary/50 shadow-sm h-[4rem]">
        <Title
          label={title}
          className="flex text-2xl items-center gap-2 text-text_primary"
          type="h1"
        >
          {iconTitle}
        </Title>

        {/* Perfil del dashboard */}
        <Profile />
      </div>
    </>
  );
};

export default Header;
