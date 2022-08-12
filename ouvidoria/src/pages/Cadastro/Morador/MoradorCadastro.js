import React from "react";
import Menu from "../../../components/Menu/MenuRegistro";
import { Container, ButtonCad } from "./MoradorCadastroStyle";
import {  useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import validator from "validator";
import { axiosInstance } from "../../../api_services/ouvidoriaApi";
import { MenuMobile } from "../../../components/Menu/MenuMobile";
import ModalSuccess from "../../../components/Modal/ModalSuccess";
import AlertWarning from "../../../components/Alert/AlertWarning";

export default function CondominioCad() {

  const [menuVisible, setMenuVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [openwarn, setOpenWarn] = useState(false);

  const [values, setValues] = useState({
    
    nome: '',
    dtNasci: '',
    email: '',
    senha: '', 
    condominio: '',
    bloco: '',
    apto: '',
    uf: '', 
    cep: ''
  });

  const handleClickBtn = () => {
    //lógica para enviar os dados a api pelo axios
    console.log(values);
    if (values.username === "" || values.nome === "" || values.dtNasci === "" || values.email === ""|| values.senha === "" || values.condominio === "" || values.cep === "" || values.bloco === "" || values.uf === "" || values.apto === "") {
      console.log("campos inválidos");
      setOpenWarn(true)

    } else {
    axiosInstance
      .post("http://localhost:4200/user", {
        username: values.username,
        nome: values.nome,
        dtNasci: values.dtNasci,
        email: values.email,
        senha: values.senha,
        condominio: values.condominio,
        bloco: values.bloco,
        apto: values.apto,
        uf: values.uf,
        cep: values.cep
      })
      .then((response) => {
        console.log(response);
        setOpen(true)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  //validação email
  const [emailError, setEmailError] = useState("");

  const [pwdError, setPwdError] = useState("");


  return (
    <>
    <ModalSuccess open={open} setOpen={setOpen}/>
    <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible}/>
      <Container>
        <BiArrowBack
          size={35}
          onClick={() => {
            (window.history.go(-2));
          }}
        />
        <h1> Cadastro de Perfil </h1>
        <form>
          <section className="form-data">
            <h3>Dados Pessoais</h3>
            <div className="forms">
              <div className="input-dados">
                <label htmlFor="nome"> Nome completo: </label>
                <input
                  type="text"
                  name="nome"
                  className="nomeCompleto"
                  required
                  value={values.nome}
                  onChange={(e) =>
                    setValues({ ...values, nome: e.target.value })
                  }
                />
              </div>

              <div className="input-dados">
                <label htmlFor="idUsername">Nome de usuário:</label>
                <input
                  type="text"
                  name="idUsername"
                  id="UserName"
                  className="username"
                  required
                  value={values.username}
                  onChange={(e) =>
                    setValues({ ...values, username: e.target.value })
                  }
                />
              </div>

              <div className="input-dados">
                <label htmlFor="dtNasci">Data de Nascimento:</label>
                <input
                  type="date"
                  name="dtNasci"
                  className="data"
                  required
                  value={values.dtNasci}
                  onChange={(e) =>
                    setValues({ ...values, dtNasci: e.target.value })
                  }
                ></input>
              </div>
            </div>

            <div className="forms">
              <div className="input-dados">
                <label htmlFor="email"> Email: </label>
                <input
                  type="email"
                  name="email"
                  className="email"
                  required
                  value={values.email}
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value });
                    let valor = e.target.value;
                    if (validator.isEmail(valor)) {
                      return setEmailError("");
                    } else {
                      return setEmailError("Email inválido");
                    }
                  }}
                />
                <span style={{ color: "red" }}>{emailError}</span>
              </div>
            </div>

            <div>
              <div className="forms">
                <div className="input-dados">
                  <label htmlFor="password">Senha:</label>
                  <input
                    type="password"
                    name="password"
                    className="senha"
                    required
                    onChange={(e) => {
                      setValues({ ...values, senha: e.target.value });
                      let senha = e.target.value;
                      if (validator.isStrongPassword(senha, {
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
                    }}
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

            <h3>Endereço</h3>
            <div className="forms">
              <div className="input-dados">
                <label htmlFor="condominio"> Condominio: </label>
                <input
                  type="text"
                  name="condominio"
                  className="condominio"
                  required
                  onChange={(e) => {
                    setValues({ ...values, condominio: e.target.value })}}
                />
              </div>

              <div className="input-dados">
                <label htmlFor="bloco"> Bloco: </label>
                <input type="text" 
                name="bloco" 
                className="bloco" 
                required 
                onChange={(e) => {
                  setValues({ ...values, bloco: e.target.value })}}
                />
              </div>

              <div className="input-dados">
                <label htmlFor="apto"> Nº Apartamento: </label>
                <input type="number" 
                name="apto" 
                className="numero" 
                required 
                onChange={(e) => {
                  setValues({ ...values, apto: e.target.value })}}
                />
              </div>

              <div className="input-dados">
                <label htmlFor="uf"> UF: </label>
                <input type="text" 
                className="UF" 
                name="uf" 
                required 
                onChange={(e) => {
                  setValues({ ...values, uf: e.target.value })}}
                />
              </div>
            </div>

            <div className="forms">
              <div className="input-dados">
                <label htmlFor="cep"> CEP: </label>
                <input
                  type="number"
                  name="cep"
                  className="CEP"
                  min="00000001"
                  max="99999999"
                  required
                  onChange={(e) => {
                    setValues({ ...values, cep: e.target.value })}}
                />
              </div>
            </div>
          </section>
        </form>
        {<AlertWarning open={openwarn} setOpen={setOpenWarn} />}
      </Container>
      
      <ButtonCad onClick={() => handleClickBtn()}>Criar Conta</ButtonCad>
    </>
  );
}
