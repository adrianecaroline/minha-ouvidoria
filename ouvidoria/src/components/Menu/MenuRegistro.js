import imagem from '../../images/owl-nav.png'
import { HeaderR, NavR } from './MenuRegistroStyle'

function MenuRegistro () {

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
          <li><a>Sobre Nós</a></li>
          <li><a>Ajuda</a></li>
        </ul>
      </NavR>
    </HeaderR>
  )
}

export default MenuRegistro