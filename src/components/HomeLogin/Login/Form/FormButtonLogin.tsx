import { Button } from "@/components";
import { BiLogIn } from "react-icons/bi";
const FormButtonLogin = () => {
  return (
    <>
      <div className="animate-fade-up animate-once animate-delay-[700ms] flex flex-col gap-8 mb-[2rem]">
        <p className="pl-[1rem] mt-[1rem] text-text_primary/50 font-robotoSlab_500 underline underline-offset-4 cursor-pointer text-secondary/30">
          Olvido la contraseña
        </p>
        <Button
          label="Login"
          type="submit"
          className="flex mt-[1.5rem] text-text_primary/90 bg-gradient-to-br from-yellow-100 to-pink-200 border shadow-md hover:shadow-none transition text-secondary/70 font-robotoSlab_500 text-xl items-center justify-center gap-2 rounded-md w-full h-[3rem]"
        >
          <BiLogIn className="text-secondary/70 text-2xl text-text_primary/50" />
        </Button>
      </div>
    </>
  );
};

export default FormButtonLogin;
