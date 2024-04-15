import { InitialValuesFormLogin } from "@/components/HomeLogin/Login/Form/labeInputs/types/typesLabelInputs";

// Inputs de login, sus datos
export interface LoginAuth extends InitialValuesFormLogin {}

export interface PropsCookies {
  auth: string;
}

export interface PropsLogout {
  message: string;
}

export interface PropsVerifyAccessToken {
  success: boolean;
  statusCode: number;
  message: string;
}

