import { Container } from './MBStyles';
import { IoClose } from "react-icons/io5";
import { useEffect } from 'react';

export function MenuMobile({ menuVisible, setMenuVisible }){

  useEffect(() => {
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible]);

  return(
    <Container isVisible={menuVisible}>
      <IoClose size={40} color="#ffff" onClick={() => setMenuVisible(false)}/>
      <nav>
        <ul>
          <li>Sobre Nós</li>
          <li>Ajuda</li>
          <li>Editar Perfil</li>
        </ul>

        <button type="submit">Sair</button>
      </nav>
    </Container>
  )
}