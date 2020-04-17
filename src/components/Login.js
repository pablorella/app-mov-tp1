import React from "react";
import Formulario from "./Formulario";
import ListaRecetas from "./ListaRecetas";

const xx = () => {
  //Cargamos el localstorage al state inicial

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  return (
    <div className="inicio contenedor">
      <Formulario />

      <ListaRecetas />
    </div>
  );
};

export default xx;
