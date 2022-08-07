import Registro from "../../components/Registro/Registro.js";
import Footer from "../../components/Footer/Footer.js";
import photo from "../../images/profile.png";
import solicitar from "../../images/solicitar.png"
import negative from "../../images/negative.png"
import lampada from "../../images/lampada.png"
import gostar from "../../images/gostar.png"
import Menu from "../../components/Menu/Menu.js";

import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import { MenuMobile } from "../../components/Menu/MenuMobile";
import { axiosInstance } from "../../api_services/ouvidoriaApi"
import { Contexto } from "../../context/AuthContext.js";


import { 
  Container, 
  FrameUser, 
  UserInfo, 
  BtnUser, 
  Botao,
  Frame 
} from "./PerfilStyle";

function User() {

  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);
  const [listRegistros, setListRegistros] = useState([]);

  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);

  useEffect (  () => {
    userRegistro();
  }, [listRegistros]);

  // useEffect(() => {
  //   if (!token) {
  //   navigate("/");
  //   }
  // }, []);

  const userRegistro = () => {
    if(user) {
      axiosInstance.get("ouvidoria/registers/" + user.username)
      .then( (res) => {
        setListRegistros(res.data)
      })
    }
  }

  return (
    <>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible} />
      <Container>
        <FrameUser>
          <span>
            <h3>Seu Perfil</h3>
          </span>
          <UserInfo>
            <p>Username: {user.username}</p>
            <p>E-mail: {user.email}</p>
            <p>Nome: {user.nome}</p>
            <p>Condominio: {user.condominio}</p>
            <p>Bloco: {user.bloco}</p>
            <p>Apto: {user.apto}</p>
          </UserInfo>
          <BtnUser>
            <Botao>Editar Perfil</Botao>
            <Botao primary>Excluir Perfil</Botao>
            {/* <input type="button" value="Editar perfil" className='btn1'/>
            <input type="button" value="Excluir conta"/> */}
          </BtnUser>
        </FrameUser>

        <section>
          <h3>Seus registros</h3>
          {listRegistros.toString()  !== "" ?
            listRegistros.map((registros) => {
              return (
                <Registro
                  key={registros.username}
                  listRegistros={listRegistros}
                  setListRegistros={setListRegistros}
                  idProtocol={registros.idProtocol}
                  tipo_registro={registros.tipo_registro}
                  titulo={registros.titulo}
                  descricao={registros.descricao}
                  assunto_registro={registros.assunto_registro}
                />
              );
            }) : (<p>Você não possui nenhum registro ainda.</p>)}
        </section>
      </Container>

      <Frame>
        <div className="carrossel">
          <h3>O que você precisa?</h3>

          <div className="box">
            <div className="card">
              <div className="icon" onClick={ () => {navigate("/reclamacao")}}>
                <img src={negative} alt="" />
                Reclamação
              </div>
            </div>
            <div className="card" onClick={ () => {navigate("/sugestao")}}>
              <div className="icon">
                <img src={solicitar} alt="" />
                Sugestão
              </div>
            </div>
            <div className="card" onClick={ () => {navigate("/solicitacao")}}>
              <div className="icon">
                  <img src={lampada} alt="" />
                Solicitação 
              </div>
            </div>
            <div className="card" onClick={ () => {navigate("/elogio")}}>
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
  )

}



export default User;


