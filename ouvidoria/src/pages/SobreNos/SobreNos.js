import iconOwl from "../../images/icon-owl.png";
import sobreNosWoman from "../../images/sobre-nos-woman.png";
import { Link } from "react-router-dom";
import { DivAzul, DivBranca } from "./SobreNosStyle";
import MenuRegistro from "../../components/Menu/MenuRegistro";
import Footer from "../../components/Footer/Footer";

export default function SobreNos() {
  return (
    <>
      <MenuRegistro />
        <DivAzul>
          <section>
            <div className="divAzul">
              <div className="divCoruja">
                <img src={iconOwl} alt="icone-owl" id="icone-owl" />{" "}
              </div>
              <div className="divTexto1">
                <p>
                  Somos uma plataforma de ouvidoria desenvolvida para facilitar
                  o monitoramento dos desafios infraestruturais que possam
                  comprometer o bem-estar da comunidade.
                </p>
              </div>
            </div>
          </section>
        </DivAzul>
        <DivBranca>
          <section>
            <div className="divBranca">
              <div className="divTexto2">
                <p>
                  Com a sua informação, podemos monitorar esses problemas de forma rápida e agir de forma prática!
                </p>
                <Link to="/">
                <button type="button" className="botao-time">
                  Conheça nosso time!
                </button>
                </Link>
              </div>
              <div className="divWoman">
                <img
                  src={sobreNosWoman}
                  alt="sobre-nos-woman"
                  id="woman"
                />
              </div>
            </div>
          </section>
        </DivBranca>
        <Footer/>
    </>
  );
}
