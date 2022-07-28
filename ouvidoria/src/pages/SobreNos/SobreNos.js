import owlNav from '../../images/owl-nav.png';
import iconOwl from '../../images/icon-owl.png';
import sobreNosWoman from '../../images/sobre-nos-woman.png';
import { Body, NavBarSobre, DivAzul, DivBranca, FooterSobre } from "./SobreNosStyle";

export default function SobreNos(){

    return(

        <>
        <Body>
            <NavBarSobre>
            <header>
                <img src={owlNav} alt="logotipo" id="logotipo" class="owl" />
                <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Meu Perfil</a></li>
                    <li><a href="#">Ajuda</a></li>
                </ul>
                </nav>
            </header>
            </NavBarSobre>
            <DivAzul>
            <section>
                <div class="divAzul">
                    <div class="divCoruja"> <img src={iconOwl} alt="icone-owl" id="icone-owl" /> </div>
                    <div class="divTexto1">
                        <p> Somos uma plataforma de ouvidoria desenvolvida 
                            para facilitar o monitoramento dos desafios infraestruturais
                            que possam comprometer o bem-estar da comunidade.</p>
                    </div>
                </div>
            </section>
            </DivAzul>
            <DivBranca>
            <section>
                <div class="divBranca">
                    <div class="divTexto2">
                        <p> Com a sua informação, podemos monitorar esses problemas de forma rápida e agir de forma prática!</p>
                        <button type="button" class="botao-time"> Conheça nosso time! </button>
                    </div>
                    <div class="divWoman"> <img src={sobreNosWoman} alt="sobre-nos-woman" id="woman" /> </div>
                </div>
            </section>
            </DivBranca>
            <FooterSobre>
            <span>
                <div id="divFooter">
                <div id="rodape">
                    <p><a href="#">SOBRE OS DESENVOLVEDORES</a></p>
                    <p><a href="#">PERGUNTAS FREQUENTES</a></p>
                    <p><a href="#">FALE COM A GENTE</a></p>
                </div>      
                <div id="copyright">
                    <p>©REACTon 2022. Todos os Direitos Reservados</p>
                </div>
                </div>    
            </span> 
            </FooterSobre>
        </Body>
        </>
    )
}