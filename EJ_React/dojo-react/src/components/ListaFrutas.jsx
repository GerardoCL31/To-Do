import Fruta from "./Fruta";

function ListaFrutas({ frutas }) {
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <Fruta key={index} nombre={fruta} />
            ))}
        </ul>
    );
}

export default ListaFrutas;