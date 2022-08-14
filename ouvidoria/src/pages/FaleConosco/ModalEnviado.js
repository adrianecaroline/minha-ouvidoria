import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '../../../node_modules/@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalEnviado (props) { 
  
  const handleClose = () => {
    props.setOpen(false);
  };

  const btn = () => {
    const mystyle = {
      background: "#235ae2",
      color: "#ffffff",
      padding: "4px 6px",
      textTransform: "none",
      fontFamily: "Montserrat",
    };
    return mystyle;
  };

  return (
    <>
      <Dialog
        open={props.open} onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"E-mail enviado com sucesso!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Agradecemos seu contato, responderemos o mais breve possível :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={btn()} onClick={handleClose}> Fechar </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
