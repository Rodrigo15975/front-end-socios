export const generalValidation = {
  matchesLetrasAndNumbers: /^[\sA-ZÁÉÍÓÚÜÑ0-9.]+$/i,
  matchesEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  matchesDNI: /^\d{8}$/,
  matchesPhones: /^[0-9]{9}$/,
  matchesRuc: /^\d{11}$/,
  matchesLetras: /^[\sA-ZÁÉÍÓÚÜÑ]+$/i,
  matchesDireccion: /^[\w\d\s.,()-]+$/,
  matchesRazonSocial: /^[\w\d\s.,()-]+$/,
};

export const messageValidation = {
  msgEmail: "Email incorrecto",
  msgDNI: "El DNI debe tener exactamente 8 dígitos",
  msgPassword: "Contraseña inválido",
  msgRuc: "El RUC debe contener 11 dígitos",
  msgLetras: "Solo puede contener letras",
  msgDireccion: "Debe contener letras y números",
  msgPhones: "Debe tener 9 dígitos",
};
