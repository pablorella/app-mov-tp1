import React, { Fragment } from "react";
import imggg from "../img/nosotros.jpg";
import Map from "./Map";

import credentials from "../utilidades/credentials";

const xx = () => {
  //console.log(credentials.mapsKey);

  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
  return (
    <Fragment>
      <div className="contenedor">
        <h1 className="fw-300 centrar-texto">Conoce Sobre Nosotros</h1>
        <div className="contenido-nosotros">
          <div className="imagen">
            <img src={imggg} alt="Imagen Sobre Nosotros" />
          </div>

          <div className="texto-nosotros">
            <blockquote>25 Años de Experiencia</blockquote>

            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </p>

            <p>
              Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
              pero la mayoría sufrió alteraciones en alguna manera, ya sea
              porque se le agregó humor, o palabras aleatorias que no parecen ni
              un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,
              necesitás estar seguro de que no hay nada avergonzante escondido
              en el medio del texto. Todos los generadores de Lorem Ipsum que se
              encuentran en Internet tienden a repetir trozos predefinidos
              cuando sea necesario, haciendo a este el único generador verdadero
              (válido) en la Internet. Usa un diccionario de mas de 200 palabras
              provenientes del latín, combinadas con estructuras muy útiles de
              sentencias, para generar texto de Lorem Ipsum que parezca
              razonable. Este Lorem Ipsum generado siempre estará libre de
              repeticiones, humor agregado o palabras no características del
              lenguaje, etc.
            </p>
          </div>
        </div>
        <h1 className="fw-300 centrar-texto">Ubicacion</h1>

        <Map
          googleMapURL={mapURL}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<p>Cargando</p>}
          marker={{ lat: -34.9214, lng: -57.9544 }}
        />
      </div>
    </Fragment>
  );
};

export default xx;
