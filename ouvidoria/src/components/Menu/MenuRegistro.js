import imagem from '../../images/owl-nav.png'
import { HeaderR, NavR } from './MenuRegistroStyle'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

function MenuRegistro ({ setMenuVisible }) {

  const navigate = useNavigate();

  return(
    <HeaderR> 
      <img src={imagem} alt="logotipo"/>
      <NavR>
        <ul>
          <li><span onClick={ () => {navigate("/perfil-user")}}>Início</span></li>
          <li><span onClick={ () => {navigate("/sobre-nos")}}>Sobre nós</span></li>
          <li><span onClick={ () => {navigate("/ajuda")}}>Ajuda</span></li>
        </ul>
      </NavR>
      <IoMenu size={34} color="#ffff" className="mobile" onClick={() => setMenuVisible (false)}/>
    </HeaderR>
  )
}

export default MenuRegistro