import React, { useContext, Fragment } from "react";
import Receta from "./Receta";
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {
  // extraer las recetas
  const { recetas } = useContext(RecetasContext);
  const { paginaactual } = useContext(RecetasContext);
  const { guardarPaginaActual } = useContext(RecetasContext);

  const { totalpaginas } = useContext(RecetasContext);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    /* console.log(nuevaPaginaActual); */
    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  //Definimos la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    /* console.log(nuevaPaginaActual); */
    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <Fragment>
      <div className="contenedor-anuncios">
        {recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta} />
        ))}
      </div>
      {paginaactual === 1 ? null : (
        <button
          type="button"
          className="boton boton-amarillo mr-1"
          onClick={paginaAnterior}
        >
          &laquo;Anterior
        </button>
      )}

      {paginaactual === totalpaginas ? null : (
        <button
          type="button"
          className="boton boton-amarillo"
          onClick={paginaSiguiente}
        >
          Posterior &raquo;
        </button>
      )}
    </Fragment>
  );
};

export default ListaRecetas;
