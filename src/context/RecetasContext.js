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
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

        const resultado = await axios.get(url);

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
