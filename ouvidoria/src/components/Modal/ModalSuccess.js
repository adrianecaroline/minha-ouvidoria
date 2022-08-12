import * as React from "react";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import Dialog from "../../../node_modules/@material-ui/core/Dialog/Dialog";
import DialogActions from "../../../node_modules/@material-ui/core/DialogActions/DialogActions";
import DialogContent from "../../../node_modules/@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "../../../node_modules/@material-ui/core/DialogContentText/DialogContentText";
import DialogTitle from "../../../node_modules/@material-ui/core/DialogTitle/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function ModalSuccess (props) {

  const navigate = useNavigate();
  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

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
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ width: "450px" }}>
          <DialogTitle id="alert-dialog-title">
            Cadastro criado com sucesso!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Volte para página de login para fazer o login:
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button style={btn()} onClick={ () => {navigate("/login")}}>
              Ir para o login
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
