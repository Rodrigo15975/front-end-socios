import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import { useLoginAuth, useVerifyTokenAcess } from "@/services/login";
import { LoginAuth } from "@/services/login/types/typeLogin";
import { dataConverterMayuscula } from "@/utils/convertedMayuscula";
import FormButtonLogin from "./FormButtonLogin";
import FormInputsLogin from "./FormInputsLogin";
import { initialValuesFormLogin } from "./labeInputs/labelInputs";
import { validationSchemaLogin } from "./validationLogin/validationLogin";
import LoadingForm from "@/components/Loading/LoadingForm";

const FormLogin = () => {
  const [cookies] = useCookies(["auth"]);

  const loginAuth = useLoginAuth();
  const { mutate, isPending } = useVerifyTokenAcess();

  const handleSubmit = (data: LoginAuth) => {
    const dataUpperCase: LoginAuth = dataConverterMayuscula.converterUppercase(
      data
    ) as LoginAuth;
    loginAuth.mutate(dataUpperCase);
  };

  useEffect(() => {
    if (cookies.auth) return mutate();
  }, [cookies.auth, mutate]);

  if (isPending) return <LoadingForm />;

  return (
    <>
      <Formik
        initialValues={initialValuesFormLogin}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaLogin}
      >
        {({ getFieldProps }) => (
          <Form className=" w-full gap-4 min-h-[25vh] flex flex-col">
            <FormInputsLogin fieldProps={getFieldProps} />
            <FormButtonLogin />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
