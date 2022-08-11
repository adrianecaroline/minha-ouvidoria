import Formss from '../../components/Forms-registro/Formss'
// import Menu from '../../components/Menu/MenuRegistro'
import Menu from '../../components/Menu/Menu'
import { Contexto } from '../../App'
import { useContext, useState } from 'react';
import { MenuMobile } from '../../components/Menu/MenuMobile';

export default function Elogio () {

  const { token, setToken } = useContext(Contexto);
  const { user, setUser } = useContext(Contexto);

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible}/>
      <Formss user={user} setToken={setToken} setUser={setUser} token={token} frase={"Faça o seu"} registro = {"Elogio"}/>
    </>
  )

}