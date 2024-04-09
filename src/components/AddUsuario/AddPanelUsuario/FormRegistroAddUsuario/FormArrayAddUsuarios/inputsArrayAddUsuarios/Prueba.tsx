export const Prueba1 = () => {
  const tipos = [
    {
      id: "1",
      nombre: "rodrigo",
      value: "1",
    },
    {
      id: "2",
      nombre: "coco",
      value: "2",
    },
  ];
  return (
    <>
      {tipos.map((tipos) => (
        <option key={tipos.id} value={tipos.value}>
          {tipos.nombre}
        </option>
      ))}
    </>
  );
};
export const Prueba2 = () => {
  const tipos = [
    {
      id: "1",
      nombre: "luis",
      value: "1",
    },
    {
      id: "2",
      nombre: "javier luis",
      value: "2",
    },
  ];
  return (
    <>
      {tipos.map((tipos) => (
        <option key={tipos.id} value={tipos.value}>
          {tipos.nombre}
        </option>
      ))}
    </>
  );
};
