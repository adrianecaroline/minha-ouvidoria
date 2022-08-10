import Imagem from "../../images/imagem-login.svg";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  MainUser,
  BannerLogin,
  LoginArea,
  LoginInput,
  InfoLogin,
} from "./EsqueciSenhaStyle";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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
          
        {/* <!-- area do input --> */}
          <LoginInput>
            <p> Recuperar senha </p>
            <span> Você receberá um link no seu e-mail para redefinir a sua senha. </span>
            <p></p>
            <form action="/" method="post">
              <input type="text" name="email" id="email" placeholder="E-mail" />
              
              <Link to="/">
                <input type="button" id="btn-login" value="Enviar link" />
              </Link>
              <hr />
            </form>
          </LoginInput>
          {/* <!-- /area do input --> */}

          {/* <!-- esqueceu senha e cadastro --> */}
          <InfoLogin>
            <p>
              Precisa de ajuda?{" "}
              <span>
                <a href="/">Clique aqui!</a>
              </span>
            </p>
            
          </InfoLogin>
          {/* <!-- /esqueceu senha e cadastro --> */}
        </LoginArea>
        {/* <!-- /login --> */}
      </MainUser>
    </>
  );
}
