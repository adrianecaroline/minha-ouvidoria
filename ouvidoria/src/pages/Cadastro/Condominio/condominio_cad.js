import Menu from "../../../components/Menu/MenuRegistro";
import { Container, Password } from "./condominio_cadStyle";

export default function CondominioCad() {
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
                <label for="razao">Razão Social</label>
                <input type="text" name="razao" className="razao" />
              </div>
              <div className="inputs">
                <label for="nome">Nome Fantasia</label>
                <input type="text" name="nome" className="nome" />
              </div>
            </section>

            <section className="forms">
              <div className="inputs">
                <label for="cnpj">CNPJ</label>
                <input type="text" name="cnpj" className="cnpj" />
              </div>
              {/* <div className="inputs">
                <label for="cpf">CPF</label>
                <input type="text" name="cpf" className="cpf" />
              </div> */}
              <div className="inputs">
                <label for="email">E-mail</label>
                <input type="email" name="email" className="email" />
              </div>
            </section>

            <section className="forms">
              <Password>
                <div className="inputs">
                  <label for="senha">Senha</label>
                  <input type="password" name="senha" className="senha" />
                </div>
                <div className="inputs">
                  <label for="confirmar">Confirmar Senha</label>
                  <input
                    type="password"
                    name="confirmar"
                    className="confirmar"
                  />
                </div>
              </Password>
            </section>
          </div>

          <div className="form-address">
            <h3>Endereço</h3>
            <section className="forms">
              <div className="inputs">
                <label for="address">Endereço</label>
                <input type="text" name="adress" className="adress" />
              </div>
              <div className="inputs">
                <label for="cep">CEP</label>
                <input type="text" name="cep" className="cep" />
              </div>
              <div className="inputs">
                <label for="num">Nº</label>
                <input type="text" name="num" className="num" />
              </div>
              <div className="inputs">
                <label for="uf">UF</label>
                <input type="text" name="uf" className="uf" />
              </div>
            </section>
          </div>

          <button type="submit" className="btn">
            Enviar
          </button>
        </form>
      </Container>
    </>
  );
}
