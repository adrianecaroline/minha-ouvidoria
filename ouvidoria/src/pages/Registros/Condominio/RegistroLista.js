import { Container, Section } from "./RegistroListaStyle";
import Registro from "../../../components/Registro/RegistroCondominio/Registros";
// import Axios from 'axios';
import { axiosInstance } from "../../../api_services/ouvidoriaApi";
import { useState } from "react";
import Menu from "../../../components/Menu/MenuCondominio/Menu";
import Footer from "../../../components/Footer/Footer";

export default function Lista() {
  const [registros, setRegistros] = useState([]);

  const handleRegistro = (registro) => { 

    axiosInstance
      .post("/ouvidoria/registro/" , {tipo_registro: registro})
      .then((response) => {
        setRegistros(response.data);
      });
  }

  return (
    <>
      <Menu />
      <Container>
        <h1>Registros</h1>
        <Section>
        <div className="principal">
            <div className='cabecalho'>
                <h3 onClick={() => handleRegistro('Solicitação')}>Solicitação</h3>
                <h3 onClick={() => handleRegistro('Reclamação')}>Reclamação</h3>
                <h3 onClick={() => handleRegistro('Sugestão')}>Sugestão</h3>
                <h3 onClick={() => handleRegistro('Elogio')}>Elogio</h3>
            </div>
          {registros.toString() !== "" ? (
            registros.map((registro, index) => {
              return (
                <Registro
                  key={`${registro.id_usuario}-${index}`}
                  id_usuario={registro.id_usuario}
                  numero={registro.numero}
                  idProtocol={registro.idProtocol}
                  registro={registro.registro}
                  titulo={registro.titulo}
                  descricao={registro.descricao}
                  endereco={registro.endereco}
                />
              );
            })
          ) : (<p className="p">Não há registros no momento.</p>)}
        </div>
        </Section>
      </Container>
      <Footer />
    </>
  );
}
