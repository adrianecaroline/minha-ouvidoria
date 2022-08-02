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
        
                <input type="button" id="btn-login" value="Continue" onClick={ () => {navigate("/perfil-user")}} />
              
              <hr />
            </form>
          </LoginInput>
          {/* <!-- /area do input --> */}

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Esqueceu sua senha?{" "}
              <span>
                <a href="/">Clique aqui!</a>
              </span>
            </p>
            <p>Ainda não tem uma conta?</p>
            <Link to="/morador-cadastro">
              <input type="button" value="Cadastre-se" onClick={ () => {navigate("/morador-cadastro")}} />
            </Link>
          </InfoLogin>
          {/* <!-- /esqueceu senha e cadastro --> */}
        </LoginArea>
        {/* <!-- /login --> */}
      </MainUser>
    </>
  );
}
