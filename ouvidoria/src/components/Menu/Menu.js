// import styles from './Menu.module.css'
import imagem from '../../images/owl-nav.png'
import { Header, Nav, Btn } from './MenuStyle'

function Menu () {

  return(
    <Header>
      <img src={imagem} alt="logotipo" />
      <Nav>
      <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Editar Perfil</a></li>
        </ul>
      </Nav>
      <Btn type="submit">Sair</Btn>
    </Header>
  )

}


export default Menu