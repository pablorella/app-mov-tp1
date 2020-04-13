import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 380,

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  // Configuración del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // extraer los valores del context
  const { informacion, guardarIdReceta, guardarReceta } = useContext(
    ModalContext
  );

  // Muestra y formatea los ingredientes
  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li className="mostrar-ingredientes">
            {" "}
            {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    <div className="anuncio">
      <img
        className="card-img-top"
        src={receta.strDrinkThumb}
        alt={`Imagen de ${receta.strDrink}`}
      />
      <div className="contenido-anuncio">
        <h3>{receta.strDrink}</h3>

        <button
          type="button"
          className="boton boton-verde"
          onClick={() => {
            guardarIdReceta(receta.idDrink);
            handleOpen();
          }}
        >
          Ver Receta
        </button>
        <Link to="compartir">
          <button type="button" className="boton boton-verde">
            Compartir con un amigo
          </button>
        </Link>
        <Modal
          open={open}
          onClose={() => {
            guardarIdReceta(null);
            guardarReceta({});
            handleClose();
          }}
        >
          <div style={modalStyle} className={classes.paper}>
            <label className="titulo">{informacion.strDrink}</label>
            <h3 className="instrucciones">Instrucciones</h3>
            <p id="p-instrucciones">{informacion.strInstructions}</p>
            {/* <div class="imagen">
              <img className="imagen-chica" src={informacion.strDrinkThumb} />
            </div> */}

            <h3 className="ingredientes">Ingredientes y cantidades</h3>
            <ul>{mostrarIngredientes(informacion)}</ul>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Receta;
