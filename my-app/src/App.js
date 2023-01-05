import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "marcos";
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre"></input>
          <h1>{nombre}</h1>
          <p>
            {auth ? "El usuario esta logeado" : "El usuario no esta logeado"}
          </p>
          <p>{2 + (1 % 2)}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <ul>
            {estaciones.map((el) => (
              <li>{el}</li>
            ))}
          </ul>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
