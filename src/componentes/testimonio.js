import React from "react";
import "../StyleSheet/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt="foto de java"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong>
        </p>
        <p className="cargo-testimonio">{props.herramienta}</p>
        <p className="texto-testimonio">{props.Testimonio}</p>
      </div>
    </div>
  );
}
export default Testimonio;
