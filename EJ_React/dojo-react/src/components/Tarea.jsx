function Tarea({ titulo, onEliminar }) {
    return (
        <li>
            {titulo}
            <button onClick={onEliminar} style={{ marginLeft: "10px" }}>
                X
            </button>
        </li>
    );
}

export default Tarea;
