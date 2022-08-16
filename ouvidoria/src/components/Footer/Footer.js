import { Frame } from "./FooterStyle";
import { useNavigate } from "react-router-dom";
function Footer () {

  const navigate = useNavigate();
  return(


    <Frame>
      <div className="info">
        <p onClick={() => { navigate("/desenvolvedores") }}>Sobre os desenvolvedores</p>
        <p onClick={() => { navigate("/perguntas-frequentes") }}>Perguntas frequentes</p>
        <p onClick={() => { navigate("/fale-conosco") }}>Fale com a gente</p>
        
      </div>
      <div className="autorais">© REACTon 2022. Todos os direitos reservados</div>
      
    </Frame>
  )

}

export default Footer