import './CampoTexto.css'
import {useState} from "react";
const CampoTexto = (props) => {

    // let valor = ''
    const [valor, setValor] = useState('')
    const aoDigitado = (evento) =>{
        props.aoAltereado(evento.target.value)
    }
    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}
export default CampoTexto;