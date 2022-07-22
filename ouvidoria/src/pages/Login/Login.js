import imgSvg from '../../images/imagem-login.svg'
import logo from '../../images/logo.png'
import styles from './Login.module.css'

export default function Login () {

  return (
    <main>
      <section id={styles.bannerlogin}>
        <h2>
          Faça seu login na plataforma para registrar e acompanhar sua
          solicitação!
        </h2>
        <img
          src={imgSvg}
          alt="Animação de um rapaz em frente ao notebook"
        />
      </section>

      <section id={styles.loginarea}>
        <img
          src={logo}
          alt="Logo da Minha Ouvidoria"
          className={styles.logoarea}
        />
        
        <div id={styles.opcoes}>
          <h3 class="h3">Você é:</h3>
          <a href="moradorLogin.html">
            <input type="button" id={styles.btnlogin} defaultValue="Morador"/>
          </a>
          <a href="condominioLogin.html">
            <input type="button" id={styles.btnlogin} defaultValue="Condomínio"/>
          </a>
        </div>
      </section>
    </main>
  )

}