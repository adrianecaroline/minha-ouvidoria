import styles from './Forms.module.css'

export default function Formss (props) {

  return (
    <main className={styles.mainForms}>
      <h1>Faça a sua {props.registro} </h1>
      <form className={styles.Formulario}>
          <div className={styles.select}>
            <label htmlFor="selection">Sobre qual assunto você quer falar: </label>
            <select id={styles.selection} name="selection">
              <option disabled defaultValue="">Selecione</option>
              <option defaultValue="ilumincacao">Iluminação</option>
              <option defaultValue="arborizacao">Arborização</option>
              <option defaultValue="coletalixo">Coleta de lixo</option>
              <option defaultValue="pavimentacao">Pavimentação</option>
              <option defaultValue="ciclovia">Ciclovia</option>
              <option defaultValue="saneamento">Saneamento básico</option>
              <option defaultValue="Outro">Outro</option>
            </select>
          </div>

          {/* <!--Descrição da solicitação--> */}
          <section className={styles.formulario}>
            <div className={styles.descricao}>
              <h1>Descrição</h1>
              <label htmlFor="titulo">Título da {props.registro}</label>
              <input type="text" name="titulo" className={styles.inputForm} />
              <label htmlFor="descricao">Descrição</label>
              <textarea row="10" id={styles.descricao} name="descricao"></textarea>
            </div>

            {/* <!--Endereço da solicitação--> */}
            <div className={styles.endereco}>
              <h1>Endereço</h1>
              <label htmlFor="local">Local do fato</label>
              <input type="text" name="local" className={styles.inputForm}/>
              <div className={styles.text}>
                <div className={styles.inputs}>
                  <label htmlFor="numero">Nº</label>
                  <input type="number" name="numero" className={styles.numero} />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="cep">CEP</label>
                  <input type="number" name="cep" className={styles.cep} />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="uf">UF</label>
                  <input type="text" name="uf" className={styles.uf} />
                </div>
              </div>
              <p>
                Incluir anexos:
                <input type="file" />
                {/* <input type="file" defaultValue="Incluir Anexos" /> */}
              </p>
            </div>
          </section>

          {/* <!--Botão para submeter as informações--> */}
          <input type="submit" defaultValue="Enviar" className={styles.botao}/>
        </form>
      </main>
  )

}