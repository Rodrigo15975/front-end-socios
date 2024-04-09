import { Tooltip } from "antd";
import { FC, PropsWithChildren } from "react";

type PropsTooltip = {
  title: string;
  bgColor?: string;
  className?: string;
  position?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "topLeft"
    | "topRight"
    | "top"
    | "right"
    | "left"
    | "leftBottom"
    | "leftTop"
    | "rightBottom";
};

const CommonTooltip: FC<PropsWithChildren & PropsTooltip> = ({
  children,
  bgColor,
  title,
  className,
  position,
}) => (
  <Tooltip
    placement={position}
    color={bgColor}
    overlayStyle={{
      fontFamily: `"Roboto Slab", "serif"`,
    }}
    title={title}
  >
    <span className={className}> {children}</span>
  </Tooltip>
);
export default CommonTooltip;
