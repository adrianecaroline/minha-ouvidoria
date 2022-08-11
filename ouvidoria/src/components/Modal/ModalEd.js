import * as React from "react";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import TextField from "../../../node_modules/@material-ui/core/TextField/TextField";
import Dialog from "../../../node_modules/@material-ui/core/Dialog/Dialog";
import DialogActions from "../../../node_modules/@material-ui/core/DialogActions/DialogActions";
import DialogContent from "../../../node_modules/@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "../../../node_modules/@material-ui/core/DialogContentText/DialogContentText";
import DialogTitle from "../../../node_modules/@material-ui/core/DialogTitle/DialogTitle";
import { useEffect, useState, useContext } from "react";
// import { Contexto } from "../../context/AuthContext";
import { Contexto } from "../../App";
import { axiosInstance } from "../../api_services/ouvidoriaApi";

export default function FormEditar(props) {
  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);

  const [editValue, setEditValue] = useState({
    nome: user.nome,
    condominio: user.condominio,
    bloco: user.bloco,
    apto: user.apto,
  });

  const handleEdit = () => {
    //logica axios instance
    if (user) {
      axiosInstance
        .put("/user/" + user.username, {
          nome: editValue.nome,
          condominio: editValue.condominio,
          bloco: editValue.bloco,
          apto: editValue.apto,
        })
        .then((response) => {
          console.log(response);
          axiosInstance.get("/userByToken").then((res) => {
            setUser(res.data.usuario)
            })
        })
        .catch((err) => {
          console.log(err);
        });
    }
    handleClose()
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const style = () => {
    const mystyle = {
      display: "flex",
      gap: "10px",
    };
    return mystyle;
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
      <Dialog open={props.open} onClose={handleClose}>
        <div style={{ width: "450px" }}>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para editar o perfil, digite as alterações nos campos abaixo:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="text"
              fullWidth
              variant="standard"
              name="nome"
              defaultValue={user.nome}
              onChange={(e) =>
                setEditValue({ ...editValue, nome: e.target.value })
              }
            />
            <div style={style()}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Condominio"
                type="tex"
                variant="standard"
                name="condominio"
                defaultValue={user.condominio}
                onChange={(e) =>
                  setEditValue({ ...editValue, condominio: e.target.value })
                }
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Bloco"
                type="tex"
                variant="standard"
                name="bloco"
                defaultValue={user.bloco}
                onChange={(e) =>
                  setEditValue({ ...editValue, bloco: e.target.value })
                }
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Apto"
                type="tex"
                variant="standard"
                name="apto"
                defaultValue={user.apto}
                onChange={(e) =>
                  setEditValue({ ...editValue, apto: e.target.value })
                }
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button style={btnR()} onClick={handleClose}>
              Cancelar
            </Button>
            <Button style={btn()}  onClick={ () => {handleEdit()}}>
              Salvar alterações
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
