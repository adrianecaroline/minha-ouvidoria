// import styles from './Registro.module.css'
import React, { useContext } from "react";
import { Container } from "./RegistroStyle";
import { FcNext } from "react-icons/fc";
import Modal from "./Modal/modal";

export default function Registro(props) {
  // const { token, setToken } = useContext(Contexto);
  const [open, setOpen] = React.useState(false);

  const handleClickArrow = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        idProtocolo={props.idProtocolo}
        tipo_registro={props.tipo_registro}
        titulo={props.titulo}
        assunto_registro={props.assunto_registro}
        descricao={props.descricao}
        listRegistros={props.listRegistros}
        setListRegistros={props.setListRegistros}
      />
      <Container>
        <div>
           (Nº do Protocolo: {props.idProtocolo})
          <p>{props.titulo}</p>
        </div>
        <div className="icon">
          <FcNext size={30} onClick={() => handleClickArrow()} />
        </div>
      </Container>
    </>
  );
}
