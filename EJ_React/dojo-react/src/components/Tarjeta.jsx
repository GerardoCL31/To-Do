import Contenido from "./contenido";

function Tarjeta({titulo, contenido}){
    return(
        <div style={{border: "1px solid gray", padding: "10px", margin:"10px"}}>
            <h3>{titulo}</h3>
            <Contenido contenido={contenido}/>
        </div>
    );
}
export default Tarjeta;