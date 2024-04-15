import { storeAuth } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAuth, logout, verifyTokenAccess } from "./api";
import { LoginAuth } from "./types/typeLogin";
import { PathsProtected, PathsPublic } from "@/router/enum/routerPaths";

export const useLoginAuth = () => {
  const { setIsAuth } = storeAuth();
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["auth"]);
  return useMutation({
    mutationFn: (data: LoginAuth) => loginAuth(data),
    onError(error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      // console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSuccess(data) {
      if (data.auth) {
        setCookie("auth", data.auth);
        setIsAuth(true);
        navigate(PathsProtected.DASHBOARD);
        return;
      }
      console.log("sucess");
    },
    onSettled() {
      console.log("settled");
    },
  });
};

export const useVerifyTokenAcess = () => {
  const { setIsAuth } = storeAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => await verifyTokenAccess(),

    onError(error) {
      toast.error("Sucedido algo inesperado");
      console.log(error);
    },
    onMutate() {
      console.log("mutate!");
    },
    onSettled() {
      console.log("settled");
    },
    onSuccess(data) {
      // console.log(data);
      if (data.success) {
        setIsAuth(true);
        navigate(PathsProtected.DASHBOARD, { replace: true });
        return;
      }
      setIsAuth(false);
      navigate(PathsPublic.INICIO, { replace: true });
      return;
    },
  });
};
export const useLogout = () => {
  const [, , clearCookies] = useCookies(["auth"]);
  const { setIsAuth } = storeAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,

    onError(error) {
      toast.error("Sucedido algo inesperado");
      console.log(error);
    },
    onMutate() {
      console.log("mutate!");
    },
    onSettled() {
      console.log("settled");
    },
    onSuccess(data) {
      setIsAuth(false);
      clearCookies("auth");
      navigate(PathsPublic.INICIO, { replace: true });
      toast.success(data.message);
      return;
    },
  });
};
