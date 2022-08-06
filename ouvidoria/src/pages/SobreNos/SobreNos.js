import iconOwl from "../../images/icon-owl.png";
import sobreNosWoman from "../../images/sobre-nos-woman.png";
import { DivAzul, DivBranca } from "./SobreNosStyle";
import Menu from "../../components/Menu/MenuRegistro";
import Footer from "../../components/Footer/Footer";

import { useNavigate } from "react-router-dom";

export default function SobreNos() {
  const navigate = useNavigate();

  return (
    <>
      <Menu/>
      <DivAzul>
        <section>
          <div className="divAzul">
            <div className="divCoruja">
              <img src={iconOwl} alt="icone-owl" id="icone-owl" />{" "}
            </div>
            <div className="divTexto1">
              <p>
                Somos uma plataforma de ouvidoria desenvolvida para facilitar o
                monitoramento dos desafios infraestruturais que possam
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
                Com a sua informação, podemos monitorar esses problemas de forma
                rápida e agir de forma prática!
              </p>

              <button
                type="button"
                className="botao-time"
                onClick={() => {
                  navigate("/desenvolvedores");
                }}
              >
                Conheça nosso time!
              </button>
            </div>
            <div className="divWoman">
              <img src={sobreNosWoman} alt="sobre-nos-woman" id="woman" />
            </div>
          </div>
        </section>
      </DivBranca>
      <Footer />
    </>
  );
}