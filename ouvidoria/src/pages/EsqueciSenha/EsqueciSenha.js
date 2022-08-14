import Imagem from "../../images/imagem-login.svg";
import logo from "../../images/logo.png";
import {
  MainUser,
  BannerLogin,
  LoginArea,
  LoginInput,
  InfoLogin,
} from "./EsqueciSenhaStyle";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../api_services/ouvidoriaApi";

export default function Login() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    senha: ''
  });

  const newPass = () => {

    if(values.email === "" || values.senha === "") {
      console.log("informe os campos corretamente")
    } else {
      axiosInstance.post("/email-teste", 
      {email: values.email, 
        senha: values.senha}
      ).then((response)=>{
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
          <h3><BiArrowBack size={35} onClick={() => { (window.history.back())}} /></h3>
          <img src={logo} alt="Logo da Minha Ouvidoria" />
          
        {/* <!-- area do input --> */}
          <LoginInput>
            <p> Recuperar senha </p>
            <span>Preencha o seu e-mail cadastrado e uma nova para redefinir. </span>
            <p></p>
            <form action="/" method="post">
              <input type="text" 
              name="email" 
              id="email" 
              placeholder="E-mail" 
              onChange={(e) => { setValues({ ...values, email: e.target.value }) }} 
              />

              <input type="password" 
              name="password" 
              id="password" 
              placeholder="Nova Senha" 
              onChange={(e) => { setValues({ ...values, senha: e.target.value }) }}
              />
              
              <input type="button" id="btn-login" value="Enviar link" onClick={ () => newPass()}/>
              
              <hr />
            </form>
          </LoginInput>
          {/* <!-- /area do input --> */}

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Precisa de ajuda?{" "}
              <span onClick={ () => {navigate("/ajuda")}}>Clique aqui!</span>
            </p>
            
          </InfoLogin>
          {/* <!-- /esqueceu senha e cadastro --> */}
        </LoginArea>
        {/* <!-- /login --> */}
      </MainUser>
    </>
  );
}
