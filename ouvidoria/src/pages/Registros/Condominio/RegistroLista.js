import { Container } from './RegistroListaStyle';
import Registro from '../../../components/Registro/RegistroCondominio/Registros';
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function Lista() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        Axios.get("")
        .then((response) => {
            setRegistros(response.data);
        })

        console.log(registros)
    }, []);


    return (
        <>
            <Container>
                <h1>Registros:</h1>
                {registros?.map((registro) => (
                    <Registro
                    key={registro.id_usuario}
                    id_usuario = {registro.id_usuario}
                    numero = {registro.numero}
                    idProtocol = {registro.idProtocol}
                    registro = {registro.registro}
                    titulo = {registro.titulo}
                    descricao = {registro.descricao}
                    endereco = {registro.endereco}
                    />
                ))}
            </Container>
        
        </>
    )
}