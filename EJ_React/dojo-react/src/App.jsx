import Saludo from "./components/Saludo";
import Perfil  from "./components/Perfil";
import Tarjeta from "./components/Tarjeta";
import BotonAlerta from "./components/BotonAlerta";
import InputConsola from "./components/InputConsola";

function App() {
  return (
    <div>
      <h1> Dojo React</h1>
      <Saludo nombre="Manue" />
      <Perfil nombre="Ana" edad={22} profesion="Banquera"/>
      <Perfil nombre="Luis" edad={25} profesion="Diseñador"/>
      <Tarjeta
        titulo="Tarjeta 1"
        contenido="Este es el contenido de la tarjeta 1"
      />

      <Tarjeta
        titulo="Tarjeta 2"
        contenido="Este es el contenido de la tarjeta 2"
      />
      <BotonAlerta/>
      <InputConsola/>
    </div>
  );
}

export default App;

