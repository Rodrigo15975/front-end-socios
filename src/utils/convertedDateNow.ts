import { format, isValid, parse } from "date-fns";

export function transformDate(value: string): Date | null {
  const date = parse(value, "dd/MM/yyyy", new Date());
  return isValid(date) ? date : null;
}

export const registerDateNow = () => {
  const fechaActual = new Date();
  const fechaFormateada = format(fechaActual, "dd-MM-yyyy");
  return fechaFormateada;
};
