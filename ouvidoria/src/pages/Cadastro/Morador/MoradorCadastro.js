import Menu from "../../../components/Menu/MenuRegistro";
import { Container, Checkbox, ButtonCad } from "./MoradorCadastroStyle"

export default function CondominioCad() {
    return (
        <>
            <Menu/>
            <Container>
                <h1> Cadastro de Perfil </h1>

                <form>
                    <section className="form-data">
                        <h3>Dados Pessoais</h3>
                        <div className="forms">
                            <div className="input-dados">
                                <label for="nome" class="nome-escuro"> Nome completo: </label> 
                                <input type="text" name="nome" 
                                className="nomeCompleto"
                                required />
                            </div>

                            <div className="input-dados">
                                <label for="CPF" className="nome-escuro CPF"> CPF: </label>
                                <input type="number" min="00000000001" max="99999999999"name="cpf" 
                                className="CPF"
                                required></input>
                            </div>

                            <div className="input-dados">
                                <label for="dtNasci" className="nome-escuro data"> Data de Nascimento: </label>
                                <input type="date" name="dtNasci" 
                                className="data data-900"
                                required></input>
                            </div>
                        </div>

                        <div className="forms">
                            <div className="input-dados">
                                <label for="E-mail" class="nome-escuro"> Email: </label>
                                <input type="email" name="email"
                                className="email"
                                required />
                            </div>

                            <div className="input-dados">
                                <label for="idUsername" className="nome-escuro username"> Nome de usuário: </label>
                                <input type="text" name="idUsername" id="UserName" 
                                className="username"
                                required /> 
                            </div>
                        </div>

                        <div className="forms">
                            <div className="input-dados">
                                <label for="senha" class="nome-escuro"> Senha: </label>
                                <input type="password" name="senha"
                                className="senha"
                                required />
                            </div>
                            
                            <div className="input-dados">
                                <label for="confirmarSenha" className="nome-escuro confirmarSenha"> Confirmar senha: </label>
                                <input type="password" name="confirmarSenha"
                                className="confirmarSenha"
                                required />
                            </div>
                        </div>

                        <div className="info-senha">
                            <p>Sua senha deve conter no mínimo:</p>
                            <p>8 caracteres.</p>
                            <p>Letras maiúsculas (A-Z).</p>
                            <p>Números (0-9).</p>
                            <p>Caracteres especiais (!@#$%&*).</p>
                        </div>
                        
                        <h3>Endereço</h3>
                        <div className="forms">
                            <div className="input-dados">
                                <label for="condominio" className="nome-escuro"> Condominio: </label>
                                <input type="text" name="condominio" className="condominio" required />
                            </div>

                            <div className="input-dados">
                                <label for="bloco" className="nome-escuro bloco"> Bloco: </label>
                                <input type="text" name="bloco"
                                className="bloco"
                                required />
                            </div>

                            <div className="input-dados">
                                <label for="apto" className="nome-escuro numero"> Nº Apartamento: </label>
                                <input type="number" name="apto" className="numero" required />
                            </div>
                        </div>

                        <div className="forms">
                            <div className="input-dados">
                                <label for="cep" className="nome-escuro"> CEP: </label>
                                <input type="number" name="cep"
                                className="CEP"
                                min="00000001" max="99999999" required />
                            </div>

                            <div className="input-dados">
                                <label for="UF" className="nome-escuro UF"> UF: </label>
                                <input type="text" className="UF" name="UF" required />
                            </div>
                        </div>
                    </section>
                </form>
            </Container>

            <Checkbox>
                <div className="termos">
                    <input type="checkbox" id="termos" name="radiobutton" value="radiobutton" required />
                    <label for="termos">Concordo com os Termos de Uso</label>
                </div>

                <div>
                    <input type="checkbox" id="newletters" name="radiobutton" value="radiobutton" />
                    <label for="newletters">Aceito receber Newletters eventualmente</label>
                </div>
            </Checkbox>

            <ButtonCad>
                Criar Conta
            </ButtonCad>
        </>
    )
}