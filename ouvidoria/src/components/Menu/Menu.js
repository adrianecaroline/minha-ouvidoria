// import styles from './Menu.module.css'
import imagem from "../../images/owl-nav.png";
import { Header, Nav, Btn } from "./MenuStyle";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../context/AuthContext";

function Menu({ setMenuVisible }) {
  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);

  const navigate = useNavigate();

  return (
    <Header>
      <img src={imagem} alt="logotipo" />
      <Nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/sobre-nos");
              }}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/ajuda");
              }}
            >
              Ajuda
            </a>
          </li>
          <li>
            <a href="#">Perfil</a>
          </li>
        </ul>
      </Nav>
      <Btn
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
          // localStorage.removeItem("user");
          // setUser(null);
          navigate("/");
        }}
      >
        Sair
      </Btn>
      <IoMenu
        size={34}
        color="#ffff"
        className="mobile"
        onClick={() => setMenuVisible(true)}
      />
    </Header>
  );
}

export default Menu;
