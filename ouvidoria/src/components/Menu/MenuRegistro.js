import imagem from '../../images/owl-nav.png'
import { HeaderR, NavR } from './MenuRegistroStyle'
import { IoMenu } from "react-icons/io5";

import { useNavigate } from 'react-router-dom'

function MenuRegistro ({setMenuVisible}) {

  const navigate = useNavigate();

  return(
    <HeaderR> 
      <img src={imagem}
        // alt="logotipo"
        // id="logotipo"
        // className="owl"
      />
      <NavR>
        <ul>
          <li><a>Início</a></li>
          <li><a onClick={ () => {navigate("/sobre-nos")}}>Sobre Nós</a></li>
          <li><a onClick={ () => {navigate("/ajuda")}}>Ajuda</a></li>
        </ul>
      </NavR>
      <IoMenu size={34} color="#ffff" className="mobile" onClick={() => setMenuVisible (true)}/>
    </HeaderR>
  )
}

export default MenuRegistro