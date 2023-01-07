import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estados from "./components/Estados";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="sOY UN COMPONENTE Funcional Expresado desde una Props" />
          <hr></hr>
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Marcos", correo: "marcoscucatto4@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como prop"></Componente>
            }
          ></Propiedades>
          <br></br>
          <br></br>
          <hr></hr>

          <Estados />
          <hr></hr>
          <RenderizadoCondicional></RenderizadoCondicional>
          <hr></hr>
          <RenderizadoElementos />

          <br></br>
        </section>
      </header>
    </div>
  );
}

export default App;
