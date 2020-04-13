import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

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
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <h3 className="fw-300 centrar-texto">Busca una Bebida</h3>

      <input
        name="nombre"
        className="form-control"
        type="text"
        placeholder="Buscar por Ingrediente"
        onChange={obtenerDatosReceta}
      />
      <select
        className="form-control"
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
        className="form-control"
        name="veralcohol"
        onChange={obtenerDatosReceta}
      >
        <option value="">-- Con/sin Alcohol --</option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non_Alcoholic">Non_Alcoholic</option>
      </select>

      <div class="buscarbebidas">
        <input
          type="submit"
          className="boton boton-amarillo"
          value="Buscar Bebidas"
        />
      </div>
    </form>
  );
};

export default Formulario;
