import contactUs from "../../images/contact-us.png"
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/MenuRegistro";
import Footer from "../../components/Footer/Footer";
import { Banner, Container, FormContact } from "./FaleConoscoStyle";

export default function FaleConosco(){

    const navigate = useNavigate();

    return(
        <>
        <Menu/>
        <Container>
            <Banner>
                <h3></h3>
                <img 
                  src={contactUs} alt="atendente" 
                />
                
            </Banner>
            <FormContact>
                <div>
                <span> 
                  <h3> Fale Conosco </h3>
                </span>
                <form>
                    <div className="input-dados">
                        <input placeholder="Nome" type="text" name="nome" className="nomeCompleto" required/>
                    </div>
                    <div className="input-dados">
                        <input placeholder="E-mail" type="email" name="email" className="email" required/>
                    </div>
                    <div className="input-dados">
                        <textarea placeholder="Mensagem" cols="30" row="15" name="mensagem" required/>
                    </div>
                    <div className="enviar-dados">
                        <input type="submit" defaultValue="Enviar" />
                    </div>
                </form>
                </div>
            </FormContact>
        </Container>
        <Footer/>
        </>
    )
}