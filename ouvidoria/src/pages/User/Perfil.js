import Registro from "../../components/Registro/Registro.js";
import Footer from "../../components/Footer/Footer.js";
import photo from "../../images/profile.png";
import solicitar from "../../images/solicitar.png"
import negative from "../../images/negative.png"
import lampada from "../../images/lampada.png"
import Menu from "../../components/Menu/Menu.js";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { MenuMobile } from "../../components/Menu/MenuMobile";
import ouvidoriaApi from "../../api_services/ouvidoriaApi"

// import styles  from './Perfil.module.css'


import { 
  Container, 
  FrameUser, 
  UserInfo, 
  BtnUser, 
  Botao,
  Frame 
} from "./PerfilStyle";

// import { useParams } from "react-router-dom"

function User(props) {
  const navigate = useNavigate();
  // const username = useParams();

  const [menuVisible, setMenuVisible] = useState(false);
  const [listRegistros, setListRegistros] = useState([]);

  useEffect(() => {
    ouvidoriaApi.get("/users/registers")
    .then((response) => {
      setListRegistros(response.data);
    }) 
    .catch((err) => {
      console.log(err)
    } );
  }, []);

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
            <p>
              Usuário:{" "}
              <strong>
                {props.user} {"Joana1"} 
              </strong>
            </p>
            <p>
              Nome:{" "}
              <strong>
                {props.name} {"Jaqueline Souza"}
              </strong>
            </p>
            <p>
              E-mail:{" "}
              <strong>
                {props.email} {"jaquelinedesouza@gmail.com"}
              </strong>
            </p>
            <p>
              Condomínio:{" "}
              <strong>
                {" "}
                {props.condominio} {"Rosa & Silva"}
              </strong>
            </p>
            <p>
              Bloco:{" "}
              <strong>
                {" "}
                {props.bloco} {7}
              </strong>
            </p>
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
          {typeof listRegistros !== "undefined" ?
            listRegistros.map((value) => {
              return (
                <Registro
                  key={value.id}
                  listRegistros={listRegistros}
                  setListRegistros={setListRegistros}
                  idProtocolo={value.idProtocolo}
                  tipo_registro={value.tipo_registro}
                  titulo={value.titulo}
                  descricao={value.descricao}
                  assunto_registro={value.assunto_registro}
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
                <img src={negative} alt="" srcset="" />
                Reclamação
              </div>
            </div>
            <div className="card" onClick={ () => {navigate("/sugestao")}}>
              <div className="icon">
                <img src={solicitar} alt="" srcset="" />
                Sugestão
              </div>
            </div>
            <div className="card" onClick={ () => {navigate("/solicitacao")}}>
              <div className="icon">
                  <img src={lampada} alt="" srcset="" />
                Solicitação
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

// function Userinf (props) {
//   const [name, email, usuario, condominio, bloco] = props;
//   return ([{
//     name: name,
//     email: email,
//     usuario: usuario,
//     condominio: condominio,
//     bloco: bloco
//   }]
//   )
// }
