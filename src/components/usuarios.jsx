export default function Usuarios(props){
    return(
        <div className="usuario">
            <h1>Soy Usuario {props.nombre} y tengo {props.edad} años</h1>
            <h2>La direccion es {props.direccion.calle} la ciudad es {props.direccion.ciudad}</h2>
        </div>
    )
}