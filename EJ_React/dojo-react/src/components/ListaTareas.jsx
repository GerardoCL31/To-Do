import { useState } from "react";
import Tarea from "./Tarea";

function ListaTareas() {
    const [tareas, setTareas] = useState([
        "Aprender React",
        "Practicar Ingles",
        "Hacer deberes",
    ]);

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <ul>
            {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    titulo={tarea}
                    onEliminar={() => eliminarTarea(index)}
                />
            ))}
        </ul>
    );
}

export default ListaTareas;
