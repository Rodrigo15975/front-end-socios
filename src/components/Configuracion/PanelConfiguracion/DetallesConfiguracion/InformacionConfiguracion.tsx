import { Typography } from "@/components/Common";
import { FC, ReactNode } from "react";

type PropsInformation = {
  title: string;
  iconTitle?: ReactNode;
};

const InformacionConfiguracion: FC<PropsInformation> = ({
  title,
  iconTitle,
}) => {
  return (
    <div className="w-full bg-bg_five/50 p-4">
      <div className="text-center border-border_primary/80">
        <Typography
          className="text-2xl flex items-center justify-center gap-2 text-text_primary/80 font-robotoSlab_500"
          label={title}
        >
          {iconTitle}
        </Typography>
      </div>
    </div>
  );
};

export default InformacionConfiguracion;
