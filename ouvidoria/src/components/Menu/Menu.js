import styles from './Menu.module.css'
import imagem from '../../images/owl-nav.png'

function Menu () {

  return(
    <header className={styles.header}>
      <img src={imagem}
        // alt="logotipo"
        // id="logotipo"
        // className="owl"
      />
      <nav className={styles.nav}>
      <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Editar Perfil</a></li>
        </ul>
      </nav>
      <button type="submit"><a href="index.html">Sair</a></button>
    </header>
  )

}


export default Menu