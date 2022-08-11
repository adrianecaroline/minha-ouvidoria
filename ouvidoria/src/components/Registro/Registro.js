// import styles from './Registro.module.css'
import React, { useState } from "react";
import { Container } from "./RegistroStyle";
import { FcNext } from "react-icons/fc";
import Modal from "./Modal/modal";

export default function Registro(props) {

  const [open, setOpen] = useState(false);

  const handleClickArrow = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        next={props.next}
        open={open}
        setOpen={setOpen}
        idProtocol={props.idProtocol}
        tipo_registro={props.tipo_registro}
        titulo={props.titulo}
        assunto_registro={props.assunto_registro}
        descricao={props.descricao}
        listRegistros={props.listRegistros}
        setListRegistros={props.setListRegistros}
      />
      <Container>
        <div>
          Registro: {props.tipo_registro}
          <p>{props.assunto_registro}</p>
        </div>
        <div className="icon">
          <FcNext size={30} onClick={() => handleClickArrow()} />
        </div>
      </Container>
    </>
  );
}
