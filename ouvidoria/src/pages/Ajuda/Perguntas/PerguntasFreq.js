import Menu from "../../../components/Menu/MenuRegistro";
import Footer from "../../../components/Footer/Footer";
import { Container } from "./PerguntasStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuMobile } from "../../../components/Menu/MenuMobile";


export default function PerguntasFrequentes () {

  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
    <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible}/>
      <Container>
        <h1>Perguntas Frequentes</h1>
        <p>Consulte as perguntas que são feitas frequentemente para Minha Ouvidoria e tire sua dúvida.</p>
        <p>Caso não encontre uma pergunta específica, nos envie sua dúvida <span onClick={() => { navigate("/fale-conosco") }}>clicando aqui.</span></p>

        <h2> O que é uma ouvidoria?</h2>
        <p>A ouvidoria é um canal que visa promover e coordenar a interlocução entre a adiministração e os usuários dos serviços prestados. 
          É com a ouvidoria que você pode poder apresentar sugestões, elogios, solicitações, reclamações que serão encaminhadas às áreas responsáveis pelo tratamento ou apuração desses registros. 
        </p>

        <h2> O que é um registro?</h2>
        <p>Um registro é um tipo de manifestação que apresenta características que podem incluir problemas ou não de um determinado contexto. O usuário poderá realizar o registro apresentando o tipo de registro que se quer fazer mais suas devidas informações, a fim de que este seja apurado e possivelmente solucionado.</p>

        <h2> Quais os tipos de registro?</h2>
        <p>Em Minha Ouvidoria, os tipos de registros são: sugestão, elogio, solicitação, reclamação.</p>

        <h2> Como posso fazer um registro?</h2> 
        <p>O registro poderá ser feito realizando o cadastro e posteriormente o login no site. Para mais informações, <span onClick={ () => {navigate("/ajuda")}}>clique aqui.</span></p>
      </Container>
      <Footer/>
    </>
  )

}