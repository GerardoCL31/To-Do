import Saludo from "./components/Saludo";
import Perfil from "./components/Perfil";
import Tarjeta from "./components/Tarjeta";
import BotonAlerta from "./components/BotonAlerta";
import InputConsola from "./components/InputConsola";
import ListaFrutas from "./components/ListaFrutas";
import Contador from "./components/Contador";
import FormularioNombre from "./components/FormularioNombre";
import ListaTareas from "./components/ListaTareas";

function App() {
  const frutas = ["Manzana", "Platano", "Melon"];

  return (
    <div>
      <h1>Dojo React</h1>

      <Saludo nombre="Manue" />

      <Perfil nombre="Ana" edad={22} profesion="Banquera" />
      <Perfil nombre="Luis" edad={25} profesion="Diseñador" />

      <Tarjeta
        titulo="Tarjeta 1"
        contenido="Este es el contenido de la tarjeta 1"
      />
      <Tarjeta
        titulo="Tarjeta 2"
        contenido="Este es el contenido de la tarjeta 2"
      />

      <BotonAlerta />
      <InputConsola />

      <h3>Frutas</h3>
      <ListaFrutas frutas={frutas} />
      <Contador/>
      <FormularioNombre/>
      <h3>Tareas</h3>
      <ListaTareas/>
    </div>
  );
}

export default App;
