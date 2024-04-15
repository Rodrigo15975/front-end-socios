import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  LoginAuth,
  PropsCookies,
  PropsLogout,
  PropsVerifyAccessToken,
} from "./types/typeLogin";

export const loginAuth = async (data: LoginAuth) =>
  await useMethods.POST<PropsCookies, LoginAuth>(PathServices.LOGIN, data);

export const verifyTokenAccess = async () =>
  await useMethods.GET<PropsVerifyAccessToken>(PathServices.ACCESSTOKEN);

export const logout = async () =>
  await useMethods.GET<PropsLogout>(PathServices.LOGOUT);
