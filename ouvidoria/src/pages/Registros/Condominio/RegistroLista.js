import { Container, Section } from "./RegistroListaStyle";
import Registro from "../../../components/Registro/RegistroCondominio/Registros";
// import Axios from 'axios';
import { axiosInstance } from "../../../api_services/ouvidoriaApi";
import { useState, useEffect } from "react";
import Menu from "../../../components/Menu/Menu";
import Footer from "../../../components/Footer/Footer";

export default function Lista() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("http://localhost:4200/ouvidoria/registers")
      .then((response) => {
        setRegistros(response.data);
      });

    console.log("deveria aparecer " + registros);
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <h1>Registros:</h1>
        <Section>
        <div className="principal">
            <div className='cabecalho'>
                <h3>Solicitação</h3>
                <h3>Reclamação</h3>
                <h3>Sugestão</h3>
                <h3>Elogio</h3>
            </div>
          {registros.toString() !== "" ? (
            registros.map((registro) => {
              return (
                <Registro
                  key={registro.id_usuario}
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
          ) : (
            <p className="p">Não há registros no momento.</p>
          )}
        </div>
        </Section>
      </Container>
      <Footer />
    </>
  );
}
