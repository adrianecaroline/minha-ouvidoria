import { Frame } from "./FooterStyle";
import { useNavigate } from "react-router-dom";
function Footer () {

  const navigate = useNavigate();
  return(
<<<<<<< HEAD
    <footer>
      <tr>
      <td><a onClick={() => { navigate("/desenvolvedores") }}>SOBRE OS DESENVOLVEDORES</a></td>
      <td><a href="#">PERGUNTAS FREQUENTES</a></td>
      <td><a href="#">FALE COM A GENTE</a></td>
      </tr>
    </footer>
=======
    <Frame>
      <div className="info">
        <p><a onClick={() => { navigate("/desenvolvedores") }}>Sobre os desenvolvedores</a></p>
        <p><a onClick={() => { navigate("/perguntas-frequentes") }}>Perguntas frequentes</a></p>
        <p><a onClick={() => { navigate("/fale-conosco") }}>Fale com a gente</a></p>
        
      </div>
      <div className="autorais">© REACTon 2022. Todos os Direitos Reservados</div>
      
    </Frame>
>>>>>>> 0314d9cdd161d99ab88e72993b156153cb68a188
  )

}

export default Footer