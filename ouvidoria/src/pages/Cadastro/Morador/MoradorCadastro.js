import Menu from "../../../components/Menu/MenuRegistro";
import { Container, Checkbox, ButtonCad } from "./MoradorCadastroStyle";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function CondominioCad() {
  // const [sucessesMsg, setsucessesMsg] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickBtn = () => {
    //lógica para enviar os dados a api pelo axios
    console.log(values);
  };

  //validação email
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError(" ");
    } else {
      setEmailError("Email inválido");
    }
  };

  //validação senha
  const [pwdError, setPwdError] = useState("");
  const validatePwd = (e) => {
    let senha = e.target.value;

    if (
      validator.isStrongPassword(senha, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPwdError("");
    } else {
      setPwdError("A senha não se enquadra");
    }
  };

  // //confirmação senha

  // const [pwdValid, setPwdValid] = useState('')
  // const confirmPwd = (e) => {
  //   let pwd = e.target.value;

  //   if(pwd !==  email){
  //     setPwdValid('senhas não batem')
  //   } else {
  //     setPwdValid('senhas')
  //   }
  // }

  return (
    <>
      <Menu />
      <Container>
        <BiArrowBack
          size={35}
          onClick={() => {
            navigate(window.history.go(-2));
          }}
        />
        <h1> Cadastro de Perfil </h1>
        <form>
          <section className="form-data">
            <h3>Dados Pessoais</h3>
            <div className="forms">
              <div className="input-dados">
                <label for="nome"> Nome completo: </label>
                <input
                  type="text"
                  name="nome"
                  className="nomeCompleto"
                  required
                  onChange={handleChangeValues}
                />
              </div>

              <div className="input-dados">
                <label for="idUsername">Nome de usuário:</label>
                <input
                  type="text"
                  name="idUsername"
                  id="UserName"
                  className="username"
                  required
                  onChange={handleChangeValues}
                />
              </div>

              <div className="input-dados">
                <label for="dtNasci">Data de Nascimento:</label>
                <input
                  type="date"
                  name="dtNasci"
                  className="data"
                  required
                  onChange={handleChangeValues}
                ></input>
              </div>
            </div>

            <div className="forms">
              <div className="input-dados">
                <label for="E-mail"> Email: </label>
                <input
                  type="email"
                  name="email"
                  className="email"
                  required
                  onChange={(e) => validateEmail(e)}
                />
                <span style={{ color: "red" }}>{emailError}</span>
              </div>
            </div>

            <div>
              <div className="forms">
                <div className="input-dados">
                  <label for="senha">Senha:</label>
                  <input
                    type="password"
                    name="password"
                    className="senha"
                    required
                    onChange={(e) => validatePwd(e)}
                  />
                  <span style={{ color: "red" }}>{pwdError}</span>
                </div>
              </div>
              <div>
                <p>Sua senha deve conter no mínimo:</p>
                <p>8 caracteres.</p>
                <p>Letras maiúsculas (A-Z).</p>
                <p>Números (0-9).</p>
                <p>Caracteres especiais (!@#$%&*).</p>
              </div>
            </div>

            <div className="forms">
              <div className="input-dados">
                <label for="condominio"> Condominio: </label>
                <input
                  type="text"
                  name="condominio"
                  className="condominio"
                  required
                  onChange={handleChangeValues}
                />
              </div>

              <div className="input-dados">
                <label for="bloco"> Bloco: </label>
                <input
                  type="text"
                  name="bloco"
                  className="bloco"
                  required
                  onChange={handleChangeValues}
                />
              </div>

              <div className="input-dados">
                <label for="apto"> Nº Apartamento: </label>
                <input
                  type="number"
                  name="apto"
                  className="numero"
                  required
                  onChange={handleChangeValues}
                />
              </div>

              <div className="input-dados">
                <label for="UF"> UF: </label>
                <input
                  type="text"
                  className="UF"
                  name="UF"
                  required
                  onChange={handleChangeValues}
                />
              </div>
            </div>

            <div className="forms">
              <div className="input-dados">
                <label for="cep"> CEP: </label>
                <input
                  type="number"
                  name="cep"
                  className="CEP"
                  min="00000001"
                  max="99999999"
                  required
                  onChange={handleChangeValues}
                />
              </div>
            </div>
          </section>
        </form>
      </Container>
      <ButtonCad onClick={() => handleClickBtn()}>Criar Conta</ButtonCad>
    </>
  );
}
