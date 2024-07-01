import './Formulario.css'
import CampoTexto from "../CampoTexto";
import Index from "../ListaSuspensa";
import Botao from "../Botao";
const Formulario = () => {

    const times = [
        'Progremação',
        'Front-End',
        'Data Science',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestâo'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Foi foi submetido')
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label={"Nome:"} placeholder={"Digite seu nome"} />
                <CampoTexto obrigatorio={true} label={"Cargo:"} placeholder={"Digite seu cargo"} />
                <CampoTexto label={"Imagem:"} placeholder={"Digite o caminhio da imagem"} />
                <Index obrigatorio={true} label={'ListaSuspensa:'} itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario