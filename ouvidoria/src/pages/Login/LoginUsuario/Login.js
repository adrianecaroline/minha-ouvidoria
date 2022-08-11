import React from "react";
import Imagem from "../../../images/imagem-login.svg";
import logo from "../../../images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  MainUser,
  BannerLogin,
  LoginArea,
  LoginInput,
  InfoLogin,
} from "./LoginStyle";

import { useState, useContext } from "react";
import { axiosInstance } from '../../../api_services/ouvidoriaApi';
import { Contexto } from "../../../App";

import { BiArrowBack } from "react-icons/bi";

export default function Login() {

  const navigate = useNavigate();

  const {setToken, setUser} = useContext(Contexto)
  
  const [values, setValues] = useState({
    email: '',
    senha: ''
  });


  const login = () => {
    axiosInstance.post("/auth/user/login", {email: values.email, senha: values.senha}).then((response)=>{
      localStorage.setItem('token',response.data.token)
      setToken(response.data.token)
      setUser(response.data.user)
      navigate('/perfil-user')
      console.log(response)
    }).catch((err)=>{
      console.log("error: " + err)
    })
  }

  return (
    <>
      <MainUser>
        <BannerLogin>
          <h2>
            Faça seu login na plataforma para registrar e acompanhar sua
            solicitação!
          </h2>
          <img src={Imagem} alt="Animação de um rapaz em frente ao notebook" />
        </BannerLogin>

        {/* <!-- login --> */}
        <LoginArea>
          <h3><BiArrowBack size={35} onClick={() => {(window.history.back());}} /></h3>
          <img src={logo} alt="Logo da Minha Ouvidoria" />
          {/* 
        <!-- area do input --> */}
          <LoginInput>
            <p>Login</p>
            <form action="/" method="post">
              <input type="text" name="email" id="email" onChange={(e) => { setValues({ ...values, email: e.target.value }) }} 
              placeholder="E-mail" />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                onChange={(e) => { setValues({ ...values, senha: e.target.value }) }}
              />
        
                <input type="button" id="btn-login" value="Continue" onClick={login} />
              
              <hr />
            </form>
          </LoginInput>
          {/* <!-- /area do input --> */}

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Esqueceu sua senha?{" "}
              <span onClick={ () => navigate("/esqueci-senha")}>
                Clique aqui!
              </span>
            </p>
            <p>Ainda não tem uma conta?</p>
              <input type="button" value="Cadastre-se" onClick={ () => {navigate("/morador-cadastro")}} />
          </InfoLogin>
          {/* <!-- /esqueceu senha e cadastro --> */}
        </LoginArea>
        {/* <!-- /login --> */}
      </MainUser>
    </>
  );
}
