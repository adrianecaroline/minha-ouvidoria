import imgSvg from '../../images/imagem-login.svg'
import logo from '../../images/logo.png'
import { 
  MainLogin, 
  Banner, 
  AreaLogin, 
  Opcoes,
  InputLogin 
} from './LoginStyle'

import { useNavigate } from 'react-router-dom'

export default function Login () {

  const navigate = useNavigate();

  return (
    <MainLogin>
      <Banner>
        <h2>
          Faça seu login na plataforma para registrar e acompanhar sua
          solicitação!
        </h2>
        <img
          src={imgSvg}
          alt="Animação de um rapaz em frente ao notebook"
        />
      </Banner>

      <AreaLogin>
        <img
          src={logo}
          alt="Logo da Minha Ouvidoria"
        />
        
        <Opcoes>
          
          <h3 class="h3">Você é:</h3>
          <InputLogin>
            <input type="button" defaultValue="Morador" onClick={ () => {navigate("/login-usuario")}}/>
        
            <input type="button" defaultValue="Condomínio"/>
          </InputLogin>
    
        </Opcoes>
      </AreaLogin>
    </MainLogin>
  )

}