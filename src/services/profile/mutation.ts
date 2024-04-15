import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { updateProfile } from "./api";
import { UpdateProfile } from "./types/typeProfile";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfile) => updateProfile(data),
    onError(error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled: async (_, error) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(_);

        await queryClient.invalidateQueries({
          queryKey: ["profile"],
        });
      }
    },
  });
};
// export const useGetProfileUsuario = () => {
//   const { invalidateQueries } = useQueryClient();

//   // QUITAR EL COOKIE Y SOL OQUE TE ENVIE EL ID, DE AHOI QUITAR TODO LOS DATOS
//   // para que sea actualice el perfil con sus datos, urgente para domingo por la noche todo listo

//   // AHORA TERMINAR LOS CRUDS QUE FALTAN

//   return useMutation({
//     // mutationFn: () => useGetProfile(),
//     onError(error) {
//       if (error instanceof AxiosError) {
//         toast.warning(error.response?.data.message);
//       }
//       console.log(error);
//     },
//     onMutate() {
//       console.log("mutate");
//     },
//     onSuccess(data) {
//       toast.success(data.message);
//     },
//     onSettled(_, error) {
//       if (error) {
//         console.log(error);
//       } else {
//         invalidateQueries({
//           queryKey: ["profile"],
//         });
//       }
//     },
//   });
// };
