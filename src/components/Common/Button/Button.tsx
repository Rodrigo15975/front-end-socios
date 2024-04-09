import { FC, ReactNode } from "react";

type PropsButton = {
  label?: string;
  type: "button" | "reset" | "submit";
  btnDefault?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  btnStyled?: boolean;
};

const Button: FC<PropsButton> = ({
  className,
  label,
  onClick,
  type,
  children,
  disabled,
  btnDefault,
  btnStyled,
}) => {
  if (btnStyled)
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`border gap-2 flex items-center justify-center hover:shadow-none transition w-full h-[2.5rem] rounded-full shadow-md ${className}`}
      >
        {children}
        {label}
      </button>
    );

  if (btnDefault)
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`border hover:shadow-none transition rounded-full shadow-md ${className}`}
      >
        {children}
        {label}
      </button>
    );

  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={className}
      >
        {children}
        {label}
      </button>
    </>
  );
};

export default Button;
