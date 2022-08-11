import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactUs from "../../images/contact-us.png"
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/MenuRegistro";
import Footer from "../../components/Footer/Footer";
import { Banner, Container, FormContact } from "./FaleConoscoStyle";
import ModalEnviado from './ModalEnviado';

export default function FaleConosco(){

    const [open, setOpen] = useState(false);
    
    const navigate = useNavigate();

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current || !form.current.nome.value || !form.current.email.value || !form.current.mensagem.value) {
        setOpen(false)
    } else {
        emailjs.sendForm('service_minha_ouvidoria', 'template_bbfhk0i', form.current, 'B-ocLRogkYTc1nhZX')
        .then((result) => {
            console.log(result.text);
            setOpen(true)
        }).catch ((error) => {
            console.log(error.text);
            setOpen(false)
        });
    }};

    return(
        <>
        <ModalEnviado open={open} setOpen={setOpen} />
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
                <form ref={form} onSubmit={sendEmail}>
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
                        <input type="submit" defaultValue="Enviar" variant="outlined" onClick={() => sendEmail()} />
                    </div>
                </form>                
                </div>
            </FormContact>
        </Container>
        <Footer/>
        </>
    )
}

// const handleClick = () => {
//     console.log("funcionando " + setOpen);
//     setOpen(true);
// };
    
//const [exibirModal, setExibirModal] = useState(false)