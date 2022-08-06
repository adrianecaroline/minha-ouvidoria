import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Solicitacoes from "../../images/solicitacoes.png";
import Registros from "../../images/registros.png"
import {Container} from './AjudaStyle'

export default function Ajuda() {
    const navigate = useNavigate();
    return (
        <>
            <Menu/>
            <Container>
                <h2>Como usar a plataforma?</h2>
                <p>Com o login feito, você poderá fazer uma sugestão, reclamação ou solicitação para os responsáveis do seu condomínio.</p>
                <p>Essas opções se encontram na página inicial por meio dos ícones representados abaixo.</p>
                <img src={Solicitacoes} alt="Ícones de sugestão, reclamação e solicitação, respectivamente."/>
                <p>E você poderá acompanhar o andamento do seu registro através da área “Seus registros”, também localizada na página inicial. </p>
                <img src={Registros} alt="Imagem listando os registros feitos, um abaixo do outro."/>
                <p>
                Você tem mais dúvidas? Se sim, <span><a onClick={ () => {navigate("/perguntas-frequentes")}}> clique aqui. </a></span>
                </p>
            </Container>
            <Footer />
        </>
    )
}