import styles from './Registro.module.css'

export default function Registro (){

  return (
        <>
          <div className={styles.registro}>
            <div>
              Sugestão (Nº 102411)
              <p>Garagem para bicicletas</p>
            </div>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </div>
          </div>
          <div className={styles.registro}>
            <div>
              Sugestão (Nº 102412)
              <p>Corrimão para escadas</p>
            </div>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </div>
          </div>
        </>
  )

}