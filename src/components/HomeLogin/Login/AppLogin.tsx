import BienvenidoLogin from "./BienvenidoLogin";
import FormLogin from "./Form/AppFormLogin";
const AppLogin = () => {
  return (
    <>
      <main className="container flex justify-center m-auto items-center min-h-screen">
        <div className="flex items-center justify-center p-4 gap-8 flex-[0_1_75rem] bg-bg_secondary/5 min-h-[94vh] rounded-3xl shadow-md border">
          <div className="flex-[0_1_28.125rem] items-center border border-border_primary/20 bg-bg_default shadow min-h-[78vh] rounded-3xl ">
            <FormLogin />
          </div>
          <div className="flex-[0_1_28.125rem] max-lg:hidden flex items-center justify-center flex-col p-8 text-center border border-border_primary/20 bg-home-login-gradient shadow min-h-[78vh] rounded-3xl ">
            <BienvenidoLogin />
          </div>
        </div>
      </main>
    </>
  );
};

export default AppLogin;
