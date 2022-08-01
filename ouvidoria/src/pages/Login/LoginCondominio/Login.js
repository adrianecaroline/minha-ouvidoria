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



export default function Login() {

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
              <a href="inicio.html">
                <input type="button" id="btn-login" value="Continue" />
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
                <a href="/">Clique aqui!</a>
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
