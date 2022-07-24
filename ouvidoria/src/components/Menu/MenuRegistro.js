import styles from './MenuRegistro.css'
import imagem from '../../images/owl-nav.png'

function MenuRegistro () {

  return(
    <header className={styles.header}>
      <img src={imagem} className="owl"
        // alt="logotipo"
        // id="logotipo"
        // className="owl"
      />
      <nav className={styles.nav}>
        <ul>
          <li><a href="inicio.html">Início</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuRegistro