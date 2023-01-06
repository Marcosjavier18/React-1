import React, { Component } from "react";

// Forma 3
const Componente = (props) => <h2>{props.msg}</h2>;

// Forma 2
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

// Forma 1
// class Componente extends Component {
//   render() {
//     return <h2> {this.props.msg}</h2>;
//   }
// }

export default Componente;
