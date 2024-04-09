import FormLogin from "./FormLogin";
import FormTitleLogin from "./FormTitleLogin";

const AppFormLogin = () => {
  return (
    <>
      <div className="flex min-h-[75vh] justify-center items-center place-content-center gap-8 flex-wrap p-8 max-sm:p-4">
        <FormTitleLogin />
        <FormLogin />
      </div>
    </>
  );
};

export default AppFormLogin;
