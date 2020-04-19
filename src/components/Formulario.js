import React, { useContext, useState, Fragment } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";
import CincoBusquedas from "../components/CincoBusquedas";
const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
    veralcohol: "",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  // función para leer los contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          buscarRecetas(busqueda);
          guardarConsultar(true);
        }}
      >
        <h3 className="fw-300 centrar-texto amarillo">Busca una Bebida</h3>
        <ul>
          <CincoBusquedas />
        </ul>
        {/*      <ul>
          Busquedas recientes
          <li>
            {JSON.parse(localStorage["busquedas"])[0]
              ? JSON.parse(localStorage["busquedas"])[0].nombre +
                " " +
                JSON.parse(localStorage["busquedas"])[0].categoria +
                " " +
                JSON.parse(localStorage["busquedas"])[0].veralcohol
              : alert("no existe")}
          </li>
          <li>
            {JSON.parse(localStorage["busquedas"])[1]
              ? JSON.parse(localStorage["busquedas"])[1].nombre +
                " " +
                JSON.parse(localStorage["busquedas"])[1].categoria +
                " " +
                JSON.parse(localStorage["busquedas"])[1].veralcohol
              : alert("no existe")}
          </li>
        </ul> */}
        {/*       {JSON.parse(localStorage["busquedas"])[0]}
         */}{" "}
        <div class="conetendor-input">
          <input
            name="nombre"
            className="form-input grisesito"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
          <select
            className="form-input grisesito"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>

          <select
            className="form-input grisesito"
            name="veralcohol"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Con/sin Alcohol --</option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non_Alcoholic">Non_Alcoholic</option>
          </select>
        </div>
        <div class="buscarbebidas">
          <input
            type="submit"
            className="boton boton-amarillo"
            value="Buscar Bebidas"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
