import './Botao.css'

const Index = (props) => {
    return(
        <button className={'botao'}>
            {props.children}
        </button>
    )
}

export default Index;