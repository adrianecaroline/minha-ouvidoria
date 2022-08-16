import Registro from "../../components/Registro/Registro.js";
import Footer from "../../components/Footer/Footer.js";
import photo from "../../images/profile.png";
import solicitar from "../../images/solicitar.png";
import negative from "../../images/negative.png";
import lampada from "../../images/lampada.png";
import gostar from "../../images/gostar.png";
import Menu from "../../components/Menu/Menu.js";
import ModalEd from "../../components/Modal/ModalEd";
import ModalRemov from "../../components/Modal/ModalRemv";

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { MenuMobile } from "../../components/Menu/MenuMobile";
import { axiosInstance } from "../../api_services/ouvidoriaApi";
import { Contexto } from "../../App.js";

import {
  Container,
  FrameUser,
  UserInfo,
  BtnUser,
  Botao,
  Frame,
} from "./PerfilStyle";

function User() {
  
  const navigate = useNavigate();

  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);

  const [listRegistros, setListRegistros] = useState([]);

  useEffect(() => {
    user.username &&
      axiosInstance.get("ouvidoria/registers/" + user.username).then((res) => {
        console.log(res);
        setListRegistros(res.data);
      });
  }, [user]);

  //menu mobile
  const [menuVisible, setMenuVisible] = useState(false);
 
  //Modal
  const [open, setOpen] = useState(false);

  const handleClickArrow = () => {
    console.log("funcionando " + setOpen);
    setOpen(true);
  };

  const [openrem, setOpenRem] = useState(false);

  const handleClickBtn = () => {
    setOpenRem(true);
  };

  return (
    <>
      <ModalRemov openrem={openrem} setOpenRem={setOpenRem} />

      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible} />
      <Container>
      <div className="modal"><ModalEd open={open} setOpen={setOpen} /></div>
        <FrameUser>
          <span>
            <h3>Meu perfil</h3>
          </span>
          <UserInfo>
            <p>Nome de usuário: {user.username}</p>
            <p>E-mail: {user.email}</p>
            <p>Nome: {user.nome}</p>
            <p>Condomínio: {user.condominio}</p>
            <p>Bloco: {user.bloco}</p>
            <p>Apto: {user.apto}</p>
          </UserInfo>
          <BtnUser>
            <Botao onClick={() => handleClickArrow()}>Editar perfil</Botao>
            <Botao onClick={() => handleClickBtn()} primary>
              Excluir perfil
            </Botao>
          </BtnUser>
        </FrameUser>

        <section>
          <h3>Meus registros</h3>
          {listRegistros.length ? (
            listRegistros.map((registros, index) => {
              //if (!registros.assunto_registro) return;
              return (
                <Registro
                  next={() => {
                    axiosInstance
                      .get("ouvidoria/registers/" + user.username)
                      .then((res) => {
                        console.log(res);
                        setListRegistros(res.data);
                      });
                  }}
                  key={`${registros.username}-${index}`}
                  listRegistros={listRegistros}
                  setListRegistros={setListRegistros}
                  idProtocol={registros.idProtocol}
                  tipo_registro={registros.tipo_registro}
                  titulo={registros.titulo}
                  descricao={registros.descricao}
                  assunto_registro={registros.assunto_registro}
                />
              );
            })
          ) : (
            <p>Você não possui nenhum registro ainda.</p>
          )}
        </section>
      </Container>

      <Frame>
        <div className="carrossel">
          <h3>O que você precisa?</h3>

          <div className="box">
            <div className="card">
              <div
                className="icon"
                onClick={() => {
                  navigate("/reclamacao");
                }}
              >
                <img src={negative} alt="" />
                Reclamação
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                navigate("/sugestao");
              }}
            >
              <div className="icon">
                <img src={solicitar} alt="" />
                Sugestão
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                navigate("/solicitacao");
              }}
            >
              <div className="icon">
                <img src={lampada} alt="" />
                Solicitação
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                navigate("/elogio");
              }}
            >
              <div className="icon">
                <img src={gostar} alt="" />
                Elogio
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={photo} className="profile" alt="profile" width="100%" />
        </div>
      </Frame>
      <Footer />
    </>
  );
}

export default User;
