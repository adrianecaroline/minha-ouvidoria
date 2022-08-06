import { Frame } from "./FooterStyle";
import { useNavigate } from "react-router-dom";
function Footer () {

  const navigate = useNavigate();
  return(
    <Frame>
      <div className="info">
        <p><a onClick={() => { navigate("/desenvolvedores") }}>Sobre os desenvolvedores</a></p>
        <p><a href="#">Perguntas frequentes</a></p>
        <p><a href="#">Fale com a gente</a></p>
      </div>
      <div className="autorais">© REACTon 2022. Todos os Direitos Reservados</div>
    </Frame>
  )

}

export default Footer