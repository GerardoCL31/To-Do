import { useState } from "react";

function InputConsola() {
    const [texto, setTexto] = useState("");

    const imprimirEnConsola = () => {
        console.log(texto);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe algo"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button onClick={imprimirEnConsola}>
                Imprimir en consola
            </button>
        </div>
    );
}

export default InputConsola;
