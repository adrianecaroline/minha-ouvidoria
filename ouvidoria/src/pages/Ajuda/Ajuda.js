import Menu from "../../components/Menu/MenuRegistro";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Solicitacoes from "../../images/solicitacoes.png";
import Registros from "../../images/registros.png";
import { Container } from "./AjudaStyle";
import {  useState } from "react";
import { MenuMobile } from "../../components/Menu/MenuMobile";

export default function Ajuda() {

  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible} />
      <Container>
        <h2>Como usar a plataforma?</h2>
        <p>
          Com o login feito, você poderá fazer uma sugestão, reclamação ou
          solicitação para os responsáveis do seu condomínio.
        </p>
        <p>
          Essas opções se encontram na página inicial por meio dos ícones
          representados abaixo.
        </p>
        <img
          src={Solicitacoes}
          alt="Ícones de sugestão, reclamação e solicitação, respectivamente."
        />
        <p>
          E você poderá acompanhar o andamento do seu registro através da área
          “Meus registros”, também localizada na página inicial.{" "}
        </p>
        <img
          src={Registros}
          alt="Imagem listando os registros feitos, um abaixo do outro."
        />
        <p>
          Você tem mais dúvidas? Se sim, <span onClick={() => {navigate("/perguntas-frequentes");}}>
            clique aqui.
          </span>
        </p>
      </Container>
      <Footer />
    </>
  );
}
