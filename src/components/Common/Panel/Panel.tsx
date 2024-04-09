import { FC, ReactNode } from "react";

type PropsPanel = {
  panel?: ReactNode;
  buttonAddPanel?: ReactNode;
};

const Panel: FC<PropsPanel> = ({ buttonAddPanel, panel }) => {
  return (
    <>
      <div className="flex flex-wrap min-h-[82vh] p-4">
        <div className="w-full mb-4 min-h-[1rem] ">{buttonAddPanel}</div>
        <div className="w-full overflow-x-hidden min-h-[50vh]">{panel}</div>
      </div>
    </>
  );
};

export default Panel;
