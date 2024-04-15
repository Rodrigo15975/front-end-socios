export function capitalize(str: string) {
  // Convertir la primera letra a mayúscula y el resto a minúscula
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
