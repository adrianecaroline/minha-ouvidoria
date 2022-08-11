// import styles from './Menu.module.css'
import imagem from "../../images/owl-nav.png";
import { Header, Nav, Btn } from "./MenuStyle";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";

function Menu({ setMenuVisible }) {
  
  const { setToken } = useContext(Contexto);

  const navigate = useNavigate();

  return (
    <Header>
      <img src={imagem} alt="logotipo" />
      <Nav>
        <ul>
          <li>
            <span onClick={() => { navigate("/sobre-nos")}}> Sobre Nós </span>
          </li>
          <li>
            <span onClick={() => { navigate("/ajuda")}}> Ajuda </span>
          </li>

          <li>
            <span onClick={() => { navigate("/perfil-user")}}>Perfil</span>
          </li>
        </ul>
      </Nav>
      <Btn onClick={() => { localStorage.removeItem("token"); setToken(null); navigate("/");}} >
        Sair
      </Btn>
      <IoMenu size={34} color="#ffff" className="mobile" onClick={() => setMenuVisible(true)} />
    </Header>
  );
}

export default Menu;
