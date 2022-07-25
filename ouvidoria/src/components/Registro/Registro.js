import styles from './Registro.module.css'
import { FcNext } from "react-icons/fc";

export default function Registro (){

  return (
        <>
          <div className={styles.registro}>
            <div>
              Sugestão (Nº 102411)
              <p>Garagem para bicicletas</p>
            </div>
            <div className={styles.icon}>
             <FcNext size={30}/>
            </div>
          </div>
          <div className={styles.registro}>
            <div>
              Sugestão (Nº 102412)
              <p>Corrimão para escadas</p>
            </div>
            <div className={styles.icon}>
              <FcNext size={30}/>
            </div>
          </div>
        </>
  )

}