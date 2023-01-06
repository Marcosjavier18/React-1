import React from "react";

export default function Propiedades(props) {
  return (
    <div>
      <h2> {props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "False"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props desde el componente Propiedades.",
};
