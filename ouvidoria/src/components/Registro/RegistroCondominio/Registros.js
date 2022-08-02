import Axios from 'axios';
import Menu from '../../Menu/Menu';
import { Container, Registro, Feedback } from './RegistrosStyle'

export default function Registros(props) {

    return (
        <>
        <Container>
            <Registro>
                <div>
                    <p>Morador: Joana Lima</p>
                    <p>Bloco: 15 Apto: 14</p> 
                    <p>Data: 28/07/2022</p>
                </div>
                <div>
                    <p>Sugestão <span>(Nº 102412)</span></p>
                    <p>Título: Garagem para bicicletas.</p>
                    <p>Descrição: Quero garagem para bicicletas. </p>
                    <p>Endereço: Próximo ao salão de festa</p>
                    <p>Anexo: foto/video</p>
                </div>
            </Registro>
            <p>Feedback:</p>
            <Feedback>
                <input type="checkbox" />
                <label> Analisando </label>
                <input type="checkbox" />
                <label> Resolvido </label>
                <label className='feedback-msg msg'>Enviar Mensagem: <input type="text" /> </label>

                <button>Enviar</button>
            </Feedback>
        </Container>
        </>
    )
}