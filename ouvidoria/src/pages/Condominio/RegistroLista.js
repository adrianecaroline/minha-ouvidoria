import Axios from 'axios';
import { useState, useEffect } from 'react';
import Registros from '../../components/Registro/RegistroCondominio/Registros';
import Menu from '../../components/Menu/Menu';
import { Container } from './RegistroListaStyle';

export default function RegistroLista() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4200/users/registers")
        .then((response) => {
            setRegistros(response.data);
        })

        console.log(registros)
    }, []);

    return (
        <>
            <Menu/>
            <Container>
                <h1>Registros:</h1>
                <Registros
                    id_usuario = {"Mylena"}
                    numero = {"221"}
                    idProtocol = {"4321"}
                    registro = {"Solicitação"}
                    titulo = {"Uma solicitação"}
                    descricao = {"Uma descrição"}
                    endereco = {"Bloco 221"}
                />
            </Container>
        
        </>
    )
}