import Imagem from "../../../images/imagem-login.svg";
import logo from "../../../images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import AlertWarning from "../../../components/Alert/AlertWarning";
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
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate();

  const [openwarn, setOpenWarn] = useState(false);

  const {setToken, setUser} = useContext(Contexto)
  
  const [values, setValues] = useState({
    email: '',
    senha: ''
  });


  const login = () => {
    if (values.email === "" || values.senha === "" ) {
      console.log("Email ou senha inválidos")
      setOpenWarn(true)
    } else {
    axiosInstance.post("/auth/condominio/login", {email: values.email, senha: values.senha}).then((response)=>{
      localStorage.setItem('token',response.data.token)
      setToken(response.data.token)
      setUser(response.data.user)
      navigate('/perfil-condominio')
      console.log(response)
    }).catch((err)=>{
      console.log("error: " + err)
    })
   }
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
              <input type="text" name="email" id="email" placeholder="E-mail" 
              onChange={(e) => { setValues({ ...values, email: e.target.value }) }} 
              />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                onChange={(e) => { setValues({ ...values, senha: e.target.value }) }}
              />
                <div style={{width: "350px"}}>{<AlertWarning open={openwarn} setOpen={setOpenWarn} />}</div>

                <input type="button" id="btn-login" value="Continue" onClick={ () => login()}/>
              <hr />
            </form>
          </LoginInput>

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Esqueceu sua senha?{" "}
              <span onClick={ () => {navigate("/esqueci-senha")}}>
                 Clique aqui!
              </span>
            </p>
            <p>Ainda não tem uma conta?</p>
            <input type="button" value="Cadastre-se" onClick={ () => {navigate("/condominio-cadastro")}}/>
          </InfoLogin>
          
        </LoginArea>
      </MainUser>
    </>
  );
}
