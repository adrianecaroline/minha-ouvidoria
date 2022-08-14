import Menu from "../../components/Menu/MenuRegistro";
import { useState } from "react";
import { MenuMobile } from "../../components/Menu/MenuMobile";
import { MainDev, Dev } from './DevStyle';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import devArthur from "../../images/dev-arthur.jpeg"
import devLucas from "../../images/dev-lucas.jpeg"
import devMylena from "../../images/dev-mylena.jpeg"
import devThais from "../../images/dev-thais.jpeg"
import devAdriane from "../../images/dev-adriane.jpeg"


export default function Desenvolvedores () {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Dev>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Menu setMenuVisible={setMenuVisible}/>
      <MainDev>
        <div>
          <div className="card-dev">
            <img src={devAdriane} alt="devAdriane"/>  
            Adriane Caroline

            <div className="perfil">
              <a href="https://github.com/adrianecaroline" target="_blank">
                <AiFillGithub size={30} color="black"  />
              </a>
              <a href="https://www.linkedin.com/in/adriane-c-oliveira" target="_blank">
                <AiFillLinkedin size={30} color="black" />
              </a>
          </div>
          </div>
        </div>
        <div> 
          <div className="card-dev">
              <img src={devArthur} alt="logotipo" />
              Arthur Aguiar

            <div className="perfil">

            <a href="https://github.com/artthur-aguiar" target="_blank">
              <AiFillGithub size={30} color="black" />
            </a>
              <a href="https://www.linkedin.com/in/arthur-aguiar-santana/" target="_blank">
                <AiFillLinkedin size={30} color="black" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card-dev">
              <img src={devLucas} alt="lucas"/>
              Lucas Gabriel

            <div className="perfil">
            <a href="https://github.com/lucasgabriel0613" target="_blank">
              <AiFillGithub size={30} color="black" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-gabriel-260865127" target="_blank">
              <AiFillLinkedin size={30} color="black" />
            </a>
          </div>
          </div>
        </div>
        <div> 
          <div className="card-dev">
            <img src={devMylena} alt="mylena"/>
            Mylena Mel

            <div className="perfil">
            <a href="https://github.com/mylenamelsilva" target="_blank">
              <AiFillGithub size={30} color="black" />
            </a>
            <a href="https://www.linkedin.com/in/mylenamelsilva" target="_blank">
              <AiFillLinkedin size={30} color="black" />
            </a>
          </div>
          </div>
        </div>
        <div> 
          <div className="card-dev">
            <img src={devThais} alt="thais"/>
            Thais Ferreira

          <div className="perfil">
          <a href="https://github.com/ThaisSilva1" target="_blank">
            <AiFillGithub size={30} color="black" />
          </a>
          <a href="https://www.linkedin.com/in/tha%C3%ADs-ferreira-a86172195/" target="_blank">
            <AiFillLinkedin size={30} color="black" />
          </a>
          </div>
          </div>
        </div>
        </MainDev>
    </Dev>
  )


}