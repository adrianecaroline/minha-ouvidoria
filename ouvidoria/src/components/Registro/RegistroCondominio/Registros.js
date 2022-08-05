import { Container, Registro, Feedback } from './RegistroStyle'

export default function Registros(props) {

    return (
        <>
        <Container>
            <Registro>
                <div>
                    <p>Morador: {props.id_usuario}</p>
                    <p>Bloco: Apto: {props.numero}</p> 
                </div>
                <div>
                    <p> {props.registro} <span>(Nº {props.idProtocol})</span></p>
                    <p>Título: {props.titulo}</p>
                    <p>Descrição: {props.descricao} </p>
                    <p>Endereço: {props.endereco}</p>
                    <p>{props.url}</p>
                </div>
            </Registro>
            <p>Feedback:</p>
            <Feedback>
                <input type="checkbox" />
                <label> Analisando </label>
                <input type="checkbox" />
                <label> Resolvido </label>
                <label className='feedback-msg msg'>Enviar Mensagem: <input type="text" /> </label>

                <button>Enviar</button>
            </Feedback>
        </Container>
        </>
    )
}