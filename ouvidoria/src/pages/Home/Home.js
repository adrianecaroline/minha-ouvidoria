import house from '../../images/house.png'
import owlfront from '../../images/owl-front.png'
import { useNavigate } from "react-router-dom";
import { Principal, Frame1, Frame2 } from './HomeStyle';

export default function Home () {

  const navigate = useNavigate();

  return (
    <Principal>
      <Frame1>
        <img src={owlfront} alt="logotipo"  width="100%" />

        <h1>Ajude a gerir os desafios de infraestrutura da sua comunidade!</h1>
        
        <button type="button" onClick={ () => {navigate("/login")}}>Começar</button>
        
      </Frame1>

      <Frame2>
        <img src={house} alt="" />
      </Frame2>
    </Principal>
  )
}