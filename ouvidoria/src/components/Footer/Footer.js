import { useNavigate } from "react-router-dom";
function Footer () {

  const navigate = useNavigate();
  return(
    <footer>
      <tr>
      <td><a onClick={() => { navigate("/desenvolvedores") }}>SOBRE OS DESENVOLVEDORES</a></td>
      <td><a href="#">PERGUNTAS FREQUENTES</a></td>
      <td><a href="#">FALE COM A GENTE</a></td>
      </tr>
    </footer>
  )

}

export default Footer