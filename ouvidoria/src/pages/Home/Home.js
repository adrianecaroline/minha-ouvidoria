import styles from './Home.module.css'
import house from '../../images/house.png'
import owlfront from '../../images/owl-front.png'
import { Link } from "react-router-dom";

export default function Home () {

  return (
    <div className={styles.principal}>
      <div className={styles.frame1}>
        <img src={owlfront} alt="logotipo" className={styles.owl} width="100%" />

        <h1>Ajude a gerir os desafios de infraestrutura da sua comunidade!</h1>
        <Link to="/login">
        <button type="button" className={styles.btn}><a href="opcoesLogin.html">Começar</a></button>
        </Link>
        
      </div>

      <div className={styles.frame2}>
        <img src={house} className={styles.house} alt="" />
      </div>
    </div>
  )
}