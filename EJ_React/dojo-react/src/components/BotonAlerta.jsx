function BotonAlerta(){
    const mostartAlerta = () =>{
        alert("Botón presionado");
    };

    return(
        <button onClick={mostartAlerta}>
            Mostrar alerta
        </button>
    )
}
export default BotonAlerta;