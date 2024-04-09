import { Title, Typography } from "@/components";

const FormTitleLogin = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center text-center animate-fade-up animate-once animate-delay-[300ms]">
        <Title type="h1" label="Iniciar Sesión" className="w-full text-3xl text-text_secondary" />
        <Typography
          className="w-full text-text_primary/70"
          label="Por favor ingrese su DNI y su Contraseña para acceder a la plataforma."
        />
      </div>
    </>
  );
};

export default FormTitleLogin;
