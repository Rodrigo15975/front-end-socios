import { ErrorMessage, Field } from "formik";
import { PropsInput } from "..";

const Input = ({
  fieldProps,
  type,
  name,
  className,
  textPlaceHolder,
  label,
  labelClassName,
  classNameParentInputs,
  Icon,
  reset,
  as,
  AsComPonente,
}: PropsInput) => {
  if (reset)
    return (
      <div>
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
        <Field
          autoComplete=""
          className={`${className} outline-none border`}
          {...fieldProps(name)}
          as={as}
          type={type}
          name={name}
          id={name}
          placeholder={textPlaceHolder}
        >
          {AsComPonente}
        </Field>
        <ErrorMessage
          name={name}
          component="p"
          className="text-text_secondary"
        />
      </div>
    );

  return (
    <>
      {/* Añadir el estilo y el ancoh a tu comodidad */}
      <div className={classNameParentInputs}>
        {label && (
          <label className={labelClassName} htmlFor={name}>
            {label}
          </label>
        )}
        <div className="flex flex-col w-full relative">
          <Field
            autoComplete=""
            className={`${className} outline-none border`}
            {...fieldProps(name)}
            type={type}
            name={name}
            id={name}
            placeholder={textPlaceHolder}
          />
          {Icon && (
            <img src={Icon} className="absolute right-2 top-1" alt="icon" />
          )}
          <ErrorMessage
            name={name}
            component="p"
            className="text-text_secondary text-[0.9rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
