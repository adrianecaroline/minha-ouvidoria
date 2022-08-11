import { Container, Registro, Feedback } from "./RegistrosStyle";

export default function Registros(props) {
  return (
    <>
      <Container>
        <Registro>
          <div>
            <p><span>Morador: </span>{props.id_usuario}</p>
            <p><span>Endereço: </span> {props.endereco}</p>
            <p><span> Nº:</span> {props.numero}</p>
          </div>
          <div>
            <p>
              {" "}
              {props.registro} <span>(Nº {props.idProtocol})</span>
            </p>
            <p><span>Título:</span> {props.titulo}</p>
            <p><span>Descrição:</span> {props.descricao} </p>
            <p><span>Endereço:</span> {props.endereco}</p>
            <p>{props.url}</p>
          </div>
        </Registro>
        <p><span>Feedback:</span></p>
        <Feedback>
          <input type="checkbox" />
          <label> Analisando </label>
          <input type="checkbox" />
          <label> Resolvido </label>
          <label className="feedback-msg msg">
            Enviar Mensagem: <input placeholder="Digite..." className="box" type="text" />{" "}
          </label>

          <button>Enviar</button>
        </Feedback>
      </Container>
    </>
  );
}
