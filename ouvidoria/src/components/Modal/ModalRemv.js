import * as React from "react";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import Dialog from "../../../node_modules/@material-ui/core/Dialog/Dialog";
import DialogActions from "../../../node_modules/@material-ui/core/DialogActions/DialogActions";
import DialogContent from "../../../node_modules/@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "../../../node_modules/@material-ui/core/DialogContentText/DialogContentText";
import DialogTitle from "../../../node_modules/@material-ui/core/DialogTitle/DialogTitle";
import { useEffect, useState, useContext } from "react";
import { axiosInstance } from "../../api_services/ouvidoriaApi";
import { Contexto } from '../../App'
import { useNavigate } from "react-router-dom";

export default function FormRemov(props) {

  const navigate = useNavigate();

  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);


  const handleRemov = () => {
    if(user) {
      axiosInstance.delete('/user/' + user.username).then((response) => {
        console.log(response);
        localStorage.removeItem("token"); 
        setToken(null); 
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  };

  // const handleClickOpen = () => {
  //   props.setOpenRem(true);
  // };

  const handleClose = () => {
    props.setOpenRem(false);
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
  const btnR = () => {
    const mystyle = {
      background: "#ff0000",
      color: "#ffffff",
      padding: "4px 6px",
      textTransform: "none",
      fontFamily: "Montserrat",
    };
    return mystyle;
  };

  return (
    <div>
      <Dialog
        open={props.openrem}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          <DialogTitle id="alert-dialog-title">
            Tem certeza que quer excluir seu perfil?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ao excluir o seu perfil você irá perder todos os registros que
              você possui.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button style={btn()} onClick={handleClose}>
              Cancelar
            </Button>
            <Button style={btnR()} onClick={ ()=> handleRemov()} autoFocus>
              Excluir
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
