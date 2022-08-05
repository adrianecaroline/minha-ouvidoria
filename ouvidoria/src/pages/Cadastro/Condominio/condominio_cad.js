import Menu from "../../../components/Menu/MenuRegistro";
import { Container, Password } from "./condominio_cadStyle";
import { useState } from "react";

export default function CondominioCad() {

  const [values, setValues] = useState();
  
  const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickBtn = () => {
    //lógica para enviar os dados a api pelo axios
    console.log(values)
  }

  return (
    <>
      <Menu />
      <Container>
        <h1>Cadastro Condomínio</h1>

        <form>
          <div className="form-data">
            <h3>Dados Pessoais</h3>
            <section className="forms">
              <div className="inputs">
                <label htmlFor="razao">Razão Social</label>
                <input type="text" name="razao" className="razao" onChange={handleChangeValues}/>
              </div>
              <div className="inputs">
                <label htmlFor="nome">Nome Fantasia</label>
                <input type="text" name="nome" className="nome" onChange={handleChangeValues}/>
              </div>
            </section>

            <section className="forms">
              <div className="inputs">
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" name="cnpj" className="cnpj" onChange={handleChangeValues}/>
              </div>
              {/* <div className="inputs">
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" className="cpf" />
              </div> */}
              <div className="inputs">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" className="email" onChange={handleChangeValues}/>
              </div>
            </section>

            <section className="forms">
              <Password>
                <div className="inputs">
                  <label htmlFor="senha">Senha</label>
                  <input type="password" name="senha" className="senha" onChange={handleChangeValues}/>
                </div>
                <div className="inputs">
                  <label htmlFor="confirmar">Confirmar Senha</label>
                  <input
                    type="password"
                    name="confirmar"
                    className="confirmar"
                    onChange={handleChangeValues}
                  />
                </div>
              </Password>
            </section>
          </div>

          <div className="form-address">
            <h3>Endereço</h3>
            <section className="forms">
              <div className="inputs">
                <label htmlFor="address">Endereço</label>
                <input type="text" name="adress" className="adress" onChange={handleChangeValues}/>
              </div>
              <div className="inputs">
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" className="cep" onChange={handleChangeValues}/>
              </div>
              <div className="inputs">
                <label htmlFor="num">Nº</label>
                <input type="text" name="num" className="num" onChange={handleChangeValues}/>
              </div>
              <div className="inputs">
                <label htmlFor="uf">UF</label>
                <input type="text" name="uf" className="uf" onChange={handleChangeValues}/>
              </div>
            </section>
          </div>

              {/*type submit está recarregando a pagina*/}
          <button type="submit" className="btn" onClick={() => handleClickBtn()}>
            Enviar
          </button>
        </form>
      </Container>
    </>
  );
}
