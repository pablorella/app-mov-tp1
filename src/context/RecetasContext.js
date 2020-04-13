import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
    veralcohol: "",
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria, veralcohol } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        let url = "";
        /*         console.log("la categoraia es:" + categoria);
         */

        if (categoria.trim() != "") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}&a=${veralcohol}`;
          /*           console.log("no es nula la categorai");
           */
        } else if (nombre.trim() != "" && veralcohol.trim() != "") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&a=${veralcohol}`;
        } else if (nombre.trim() != "") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`;
        } else if (veralcohol.trim() != "") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=&a=${veralcohol}`;
        }
        /*         console.log(url);
         */

        const resultado = await axios.get(url);
        //console.log(resultado.data.drinks);
        //alert(resultado.data.drinks);
        if (
          resultado.data.drinks === "" ||
          resultado.data.drinks === undefined
        ) {
          alert("No se encontraron datos");
          return;
        }
        /*         console.log(resultado.data.drinks.length);
         */ if (paginaactual === 1) {
          guardarRecetas(
            resultado.data.drinks.slice(paginaactual - 1, paginaactual * 10)
          ); //calcular el total de paginas
        } else {
          guardarRecetas(
            resultado.data.drinks.slice(
              (paginaactual - 1) * 10,
              paginaactual * 10
            )
          ); //calcular el total de paginas
          //calcular el total de paginas
        }

        //console.log(resultado.data.drinks.length);
        const calcularTotalPaginas = Math.ceil(
          resultado.data.drinks.length / 10
        );
        guardarTotalPaginas(calcularTotalPaginas);
        //volvemos arriba sino re molesto es subi a manopla
        const inicio = document.querySelector(".inicio");
        inicio.scrollIntoView({ behavior: "smooth" });
      };

      obtenerRecetas();
    }
  }, [busqueda, paginaactual]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        guardarConsultar,
        paginaactual,
        guardarPaginaActual,
        totalpaginas,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
