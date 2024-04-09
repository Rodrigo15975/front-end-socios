import { Title, Typography } from "@/components";

const BienvenidoLogin = () => {
  return (
    <>
      <Title
        label="Bienvenido"
        type="h2"
        className="animate-fade animate-once text-text_primary text-5xl mb-4 font-robotoSlab_500"
      />
      <Typography
        className="animate-fade animate-once animate-delay-[400ms] text-text_primary/70 font-robotoSlab_400"
        label="La credenciales son unicas, para cada usuario, Por favor, asegúrate de no compartir tus credenciales con nadie. Mantén tu información de inicio de sesión en privado."
      />
    </>
  );
};

export default BienvenidoLogin;
