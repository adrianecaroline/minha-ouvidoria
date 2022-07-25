import Registro from '../../components/Registro/Registro.js'
import Footer from '../../components/Footer/Footer.js'
import photo from '../../images/profile.png'
import Menu from '../../components/Menu/Menu.js'
import { useState } from 'react'
import { MenuMobile } from '../../components/Menu/MenuMobile'
// import styles  from './Perfil.module.css'
import { 
  Container, 
  FrameUser, 
  UserInfo, 
  BtnUser, 
  Botao 
} from './PerfilStyle'


function User(props) {

  const [menuVisible, setMenuVisible] = useState(false);
  
  return (
    <>
      <MenuMobile
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <Menu setMenuVisible={setMenuVisible}/>
      <Container>
        <FrameUser>
          <span>
            <h3>Seu Perfil</h3>
          </span>
          <UserInfo>
            <p>
            Nome: <strong>{props.name} {"Jaqueline Souza"}</strong>
            </p>
            <p>
            E-mail: <strong>{props.email} {"jaquelinedesouza@gmail.com"}</strong>
            </p>
            <p>
            Usuário: <strong>{props.user} {"Joana1"}</strong>
            </p>
            <p>
            Condomínio: <strong> {props.condominio} {"Rosa & Silva"}</strong>
            </p>
            <p>
            Bloco: <strong> {props.bloco} {7}</strong>
            </p>
            
          </UserInfo>
          <BtnUser>
            <Botao>Editar Perfil</Botao>
            <Botao primary>Excluir Perfil</Botao>
            {/* <input type="button" value="Editar perfil" className='btn1'/>
            <input type="button" value="Excluir conta"/> */}
          </BtnUser>
        </FrameUser>

        <section>
          <h3>Seus registros</h3>
          <Registro/>
        </section>
      </Container>

      {/* <div className={styles.conten}>
        <div className={styles.carrossel}>
          <h3>O que você precisa?</h3>

          <div className={styles.box}>
            <div className={styles.card}>
              <div className={styles.sing}>
                <img src="src/images/votacao-negativa.png" alt="" srcset="" />
                Reclamação
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.sing}>
                <img src="src/images/lampada.png" alt="" srcset="" />
                Sugestão
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.sing}>
                <a href="solicitacao.html">
                  <img src="src/images/solicitar.png" alt="" srcset="" />
                </a>
                Solicitação
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={photo} className={styles.photo} alt="profile" width="100%" />
        </div>
      </div> */}
      <Footer/>
    </>
  );
}

export default User;

// function Userinf (props) {
//   const [name, email, usuario, condominio, bloco] = props;
//   return ([{
//     name: name,
//     email: email,
//     usuario: usuario,
//     condominio: condominio,
//     bloco: bloco
//   }]
//   )
// }