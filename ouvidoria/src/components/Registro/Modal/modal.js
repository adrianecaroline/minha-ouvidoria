import * as React from 'react';
import Button from '../../../../node_modules/@material-ui/core/Button/Button';
import Dialog from '../../../../node_modules/@material-ui/core/Dialog/Dialog';
import DialogActions from '../../../../node_modules/@material-ui/core/DialogActions/DialogActions';
import DialogContent from '../../../../node_modules/@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '../../../../node_modules/@material-ui/core/DialogContentText/DialogContentText';
import DialogTitle from '../../../../node_modules/@material-ui/core/DialogTitle/DialogTitle';
import Axios from "axios";
import { useEffect, useState } from 'react';

export default function FormDialog(props) {
  const [deleteValue, setDeleteValue] = useState({
    idProtocol: props.idProtocol,
    registro: props.tipo_registro,
    titulo: props.titulo,
    assunto_registro: props.assunto_registro,
    descricao: props.descricao
  });

  const handleDelete = () => {
    Axios.delete(`http://localhost:8080/ouvidoria/${deleteValue.idProtocolo}`
  ) 
  handleClose();
}

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const style = () => {  
      const mystyle = {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    };

    return mystyle;
  }
  style();

  const border = () => {
    const mystyle = {
      borderBottom: "2px solid #235ae2"
    };
    return mystyle;
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <div  style={{width: "450px"}}>
        <DialogTitle style={border()}> {/*(Nº do Protocolo: {props.idProtocolo})*/} Seu Registro</DialogTitle>
        <DialogContent>
          <DialogContentText style={style()}>
            <>
              <div>
                <span>Tipo: <strong>{props.tipo_registro}</strong></span>
              </div>
              <div>
                <span>Titulo: </span>
                {props.titulo}
              </div>
              <div>
                <span>Assunto: </span>
                {props.assunto_registro}
              </div>
              <div>
                <span>Descrição: </span>
                {props.descricao}
              </div>  
            </>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Excluir</Button>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
