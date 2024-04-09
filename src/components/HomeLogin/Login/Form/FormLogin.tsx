import { Form, Formik } from "formik";
import { initialValuesFormLogin } from "./labeInputs/labelInputs";
import { validationSchemaLogin } from "./validationLogin/validationLogin";
import FormInputsLogin from "./FormInputsLogin";
import FormButtonLogin from "./FormButtonLogin";
const FormLogin = () => {
  return (
    <>
      <Formik
        initialValues={initialValuesFormLogin}
        onSubmit={(data) => {
          console.log(data);
        }}
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
