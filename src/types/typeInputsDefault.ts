interface PropsInputDefaultName {
  name: string;
  textPlaceHolder: string;
  type?: string;
  as?: string;
  label?: string;
}

export class InputDefaultNames implements PropsInputDefaultName {
  as?: string | undefined = "";
  name: string = "";
  type?: string | undefined = "";
  textPlaceHolder: string = "";
  label?: string | undefined = "";
}
