import { Container } from './MenuMobileStyles';
import { IoClose } from "react-icons/io5";
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contexto } from "../../App";

export function MenuMobile({ menuVisible, setMenuVisible }){

  const { setToken } = useContext(Contexto);
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible]); 

  return(
    <Container isVisible={menuVisible}>
      <IoClose size={40} color="#ffff" onClick={() => setMenuVisible(false)}/>
      <nav>
        <ul>
        <li>
            <span onClick={() => { navigate("/sobre-nos")}}> Sobre nós </span>
          </li>
          <li>
            <span onClick={() => { navigate("/ajuda")}}> Ajuda </span>
          </li>

          <li>
            <span onClick={() => { navigate("/perfil-user")}}>Perfil</span>
          </li>
        </ul>

        <button type="button" onClick={() => { localStorage.removeItem("token"); setToken(null); navigate("/");}}>Sair</button>
      </nav>
    </Container>
  )
}