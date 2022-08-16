import * as React from 'react';
import Button from '../../../../node_modules/@material-ui/core/Button/Button';
import Dialog from '../../../../node_modules/@material-ui/core/Dialog/Dialog';
import DialogActions from '../../../../node_modules/@material-ui/core/DialogActions/DialogActions';
import DialogContent from '../../../../node_modules/@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '../../../../node_modules/@material-ui/core/DialogContentText/DialogContentText';
import DialogTitle from '../../../../node_modules/@material-ui/core/DialogTitle/DialogTitle';
import { axiosInstance } from '../../../api_services/ouvidoriaApi';
import { useState } from 'react';

export default function FormDialog(props) {

  const [deleteValue, setDeleteValue] = useState({
    idProtocol: props.idProtocol,
    registro: props.tipo_registro,
    titulo: props.titulo,
    assunto_registro: props.assunto_registro,
    descricao: props.descricao
  });

  const handleDelete = () => {
    axiosInstance.delete(`/ouvidoria/${deleteValue.idProtocol}`
  ).then((response) => {
    props.next()
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

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

  const btn = () => {
    const mystyle = {
      background: "#235ae2",
      color: "#ffffff",
      padding: "4px 6px",
      textTransform: "none",
      fontFamily: "Montserrat"
    }
    return mystyle
  }
  const btnR = () => {
    const mystyle = {
      background: "#ff0000",
      color: "#ffffff",
      padding: "4px 6px",
      textTransform: "none",
      fontFamily: "Montserrat"
    }
    return mystyle
  }

  const border = () => {
    const mystyle = {
      borderBottom: "2px solid #235ae2"
    };
    return mystyle;
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <div  style={{width: "400px"}}>
        <DialogTitle style={border()}> {/*(Nº do Protocolo: {props.idProtocolo})*/} Meu registro</DialogTitle>
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
          <Button style={btnR()} onClick={handleDelete}>Excluir</Button>
          <Button style={btn()} onClick={handleClose}>Fechar</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
