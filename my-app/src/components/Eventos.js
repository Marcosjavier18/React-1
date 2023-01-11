import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2> Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <p>
          <b>{this.state.contador}</b>
        </p>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow Functions
  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2> Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar.bind}>+</button>
          <button onClick={this.restar.bind}>-</button>
        </nav>
        <p>
          <b>{this.state.contador}</b>
        </p>
      </div>
    );
  }
}

// Codigo bien, pero lo vamos hacer mas limpio con una const.
// function Boton(props) {
//   return <button onClick={props.myOnClick}>Boton hecho componente</button>;
// }

// Forma mas eficaz del codigo.
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton hecho componente</button>
);

// Mas sobre eventos. video 11

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos.</h2>
        {/* lo hacemos arrow function porque es un retorno implicito. ejecutamos directamente la funcion  */}
        <button
          onClick={(e) =>
            this.handleClick(e, "hola pasando parametro desde un evento")
          }
        >
          {" "}
          Saludar{" "}
        </button>
        {/* Evento personalizado. No es nada mas que una prop que le pasamos al componente y se la asignamos al evento. */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "hola pasando parametro desde un evento")
          }
        ></Boton> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "hola pasando parametro desde un evento")
          }
        ></Boton>
      </div>
    );
  }
}
