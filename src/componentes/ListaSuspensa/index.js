import './ListaSuspensa.css'

const Index = (props) =>{
    console.log(props.itens)
    return(
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default Index
