import React, { Fragment } from "react";

const xx = () => {
  return (
    <Fragment>
      <div class="contenedor seccion contenido-centrado">
        <h2 class="fw-300 centrar-texto">Llena el formulario de Contacto</h2>

        <form class="contacto" action="">
          <fieldset>
            <legend>Compartir Info con amigos</legend>
            <label for="datos">Lo que le queres compartir:</label>
            <input
              type="text"
              id="datos"
              placeholder="Datos que queres compartir "
              required
            />

            <label for="email">E-mail: </label>
            <input
              type="email"
              id="email"
              placeholder="Tu Correo electrónico"
              required
            />
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre y Apellido de la persona que envía el mail"
              required
            />
            <label for="asunto">Asunto:</label>
            <input type="tel" id="telefono" placeholder="Tu Asunto" required />

            <label for="mensaje">Mensaje: </label>
            <textarea id="mensaje" placeholder="Texto del mensaje"></textarea>
          </fieldset>

          <input type="submit" value="Enviar" class="boton boton-verde" />
        </form>
      </div>
    </Fragment>
  );
};

export default xx;
