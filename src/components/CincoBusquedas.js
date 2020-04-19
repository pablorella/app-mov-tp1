import React, { Fragment } from "react";
const CincoBusquedas = () => {
  if (localStorage.getItem("busquedas") == null) {
    localStorage.setItem("busquedas", "[]");
  }
  const titulo =
    JSON.parse(localStorage["busquedas"]).length === 0 ? (
      "No hay Busquedas"
    ) : (
      <label className="amarillo"> Busquedas Recientes</label>
    );

  /* if (JSON.parse(localStorage["busquedas"]).length === 0) {
    alert("sds");
  } */
  return (
    <Fragment>
      {titulo}
      <div className="contenedor-li">
        {JSON.parse(localStorage["busquedas"]).map((recorro, index) => (
          <li className="lidelocal">
            {recorro.nombre +
              " " +
              recorro.categoria +
              " " +
              recorro.veralcohol}
          </li>
        ))}
      </div>
    </Fragment>
  );
};

export default CincoBusquedas;
