import Notfound from '../../images/not-found-.png'
import {Container, Frame, Frame2, Btn} from './NotFoundStyle'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container>
      <Frame>
        <div>
          <img src={Notfound}/>
        </div>
        <Frame2>
            <h1>Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
            </p>
            <Link to={"/"}>  
              <Btn>Ir para a página Inicial</Btn>
            </Link>
        </Frame2>
      </Frame>
    </Container>
  );
}
