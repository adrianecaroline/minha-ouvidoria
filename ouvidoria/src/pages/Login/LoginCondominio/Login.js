import Imagem from "../../../images/imagem-login.svg";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import {
  MainUser,
  BannerLogin,
  LoginArea,
  LoginInput,
  InfoLogin,
} from "./LoginStyle";

import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

export default function Login() {

  const navigate = useNavigate();

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
          <h3><BiArrowBack size={35} onClick={() => { navigate(window.history.back());}} /></h3>
          <img src={logo} alt="Logo da Minha Ouvidoria" />
          {/* 
        <!-- area do input --> */}
          <LoginInput>
            <p>Login</p>
            <form action="/" method="post">
              <input type="text" name="email" id="email" placeholder="E-mail" />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
              />
              <a href="inicio.html">
                <input type="button" id="btn-login" value="Continue" onClick={ () => {navigate("/condominio-cadastro")}}/>
              </a>
              <hr />
            </form>
          </LoginInput>
          {/* <!-- /area do input --> */}

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Esqueceu sua senha?{" "}
              <span>
               <Link to="/esqueci-senha">
                <a href="/">Clique aqui!</a>
               </Link>
              </span>
            </p>
            <p>Ainda não tem uma conta?</p>
            <Link to="/condominio-cadastro">
              <input type="button" value="Cadastre-se" />
            </Link>
          </InfoLogin>
          {/* <!-- /esqueceu senha e cadastro --> */}
        </LoginArea>
        {/* <!-- /login --> */}
      </MainUser>
    </>
  );
}
