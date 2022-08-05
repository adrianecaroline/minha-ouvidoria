import { useNavigate } from "react-router-dom";
function Footer () {

  const navigate = useNavigate();
  return(
    <footer>
      <p><a onClick={() => { navigate("/desenvolvedores") }}>SOBRE OS DESENVOLVEDORES</a></p>
      <p><a href="#">PERGUNTAS FREQUENTES</a></p>
      <p><a href="#">FALE COM A GENTE</a></p>
    </footer>
  )

}

export default Footer