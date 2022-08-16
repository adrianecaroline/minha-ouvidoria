import { Container, Registro, Feedback } from "./RegistrosStyle";

export default function Registros(props) {
  return (
    <>
      <Container>
        <Registro>
          <div>
            <p><span>Morador: </span>{props.id_usuario}</p>
            <p className="endereco"><span>Endereço: </span> {props.endereco}</p>
            <p><span> Nº:</span> {props.numero}</p>
          </div>
          <div className="descricao">
            <p>
              {" "}
              {props.registro} <span>Nº do protocolo:  {props.idProtocol}</span>
            </p>
            <p><span>Título:</span> {props.titulo}</p>
            <p><span>Descrição:</span> {props.descricao} </p>
            <p><span>Endereço:</span> {props.endereco}</p>
            <p>{props.url}</p>
          </div>
        </Registro>
        <p><span>Feedback:</span></p>
        <Feedback>
          <div className="checkbox-mobile">
            <input type="checkbox" />
            <label> Analisando </label>
            <input type="checkbox" />
            <label> Resolvido </label>
          </div>
          <input type="checkbox" className="checkbox-normal"/>
          <label className="checkbox-normal"> Analisando </label>
          <input type="checkbox" className="checkbox-normal"/>
          <label className="checkbox-normal"> Resolvido </label>

          <div className="feedback-msg">
            <label className="msg">
            Enviar Mensagem: <input placeholder="Digite..." className="box" type="text" />{" "}
          </label>
          </div>

          <button>Enviar</button>
        </Feedback>
      </Container>
    </>
  );
}
