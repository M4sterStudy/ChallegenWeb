import React, { useState } from 'react';

const title = "Sin titulo D:";

const FirstApp = () => {
  const [numeroIngresado, setNumeroIngresado] = useState(""); // Estado para almacenar el número ingresado por el usuario

  const handleNumeroChange = (event) => {
    setNumeroIngresado(event.target.value); // Actualizar el estado con el valor del campo de texto
  };

  const checkParImpar = () => {
    const numero = parseInt(numeroIngresado); // Convertir el valor ingresado a un número entero

      if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
      } else {
        console.log(`${numero} es un número impar.`);
      }
   
  };

  return (
    <>
      <h1>{title}</h1>
      <input
        type="text"
        value={numeroIngresado}
        onChange={handleNumeroChange}
        placeholder="Ingresa un número"
      />
      <button onClick={checkParImpar}>Verificar Par/Impar</button>
    </>
  );
};

export default FirstApp;
