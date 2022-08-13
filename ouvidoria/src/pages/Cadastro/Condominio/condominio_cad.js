import Menu from "../../../components/Menu/MenuRegistro";
import { Container, Password } from "./condominio_cadStyle";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import ModalSuccess from "../../../components/Modal/ModalSuccess";
import AlertWarning from "../../../components/Alert/AlertWarning";
// import { axiosInstance } from "../../../api_services/ouvidoriaApi";
import axios from "axios";
import validator from "validator";

export default function CondominioCad() {

  const [open, setOpen] = useState(false);
  const [openwarn, setOpenWarn] = useState(false);

  const [values, setValues] = useState({
    razao_social: "",
    nome_condominio: "",
    cnpj: "",
    email: "",
    senha: "",
    endereco: "",
    cep: "",
    numero: "",
    uf: "",
  });

  const sendCadastro = () => {
    console.log(values)
    if (values.razao_social === "" || values.nome_condominio === "" || values.cnpj === "" || values.email === ""|| values.senha === "" || values.endereco === "" || values.cep === "" || values.numero === "" || values.uf === "") {
      console.log("campos inválidos");
      setOpenWarn(true)
    } else {
      axios.post("http://localhost:4200/q-admin", {
          razao_social: values.razao_social,
          nome_condominio: values.nome_condominio,
          cnpj: values.cnpj,
          email: values.email,
          senha: values.senha,
          endereco: values.endereco,
          cep: values.cep,
          numero: values.numero,
          uf: values.uf,
        })
        .then((response) => {
          console.log(response);
          setOpen(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
    <ModalSuccess open={open} setOpen={setOpen}/>
      <Menu />
      <Container>
        <BiArrowBack
          size={35}
          onClick={() => {
            window.history.go(-1);
          }}
        />
        <h1>Cadastro Condomínio</h1>

        <form >
          <div className="form-data">
            <h3>Dados Pessoais</h3>
            <section className="forms">
              <div className="inputs">
                <label htmlFor="razao">Razão Social</label>
                <input
                  type="text"
                  name="razao"
                  className="razao"
                  required
                  value={values.razao_social}
                  onChange={(e) =>
                    setValues({ ...values, razao_social: e.target.value })
                  }
                />
              </div>
              <div className="inputs">
                <label htmlFor="nome">Nome Fantasia</label>
                <input
                  type="text"
                  name="nome"
                  className="nome"
                  required
                  value={values.nome_condominio}
                  onChange={(e) =>
                    setValues({ ...values, nome_condominio: e.target.value })
                  }
                />
              </div>
            </section>

            <section className="forms">
              <div className="inputs">
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  name="cnpj"
                  className="cnpj"
                  required
                  value={values.cnpj}
                  onChange={(e) =>
                    setValues({ ...values, cnpj: e.target.value })
                  }
                />
              </div>
              <div className="inputs">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="email"
                  required
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
            </section>

            <section className="forms">
              <Password>
                <div className="inputs">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    name="senha"
                    className="senha"
                    required
                    value={values.senha}
                    onChange={(e) =>
                      setValues({ ...values, senha: e.target.value })
                    }
                  />
                </div>
              </Password>
            </section>
          </div>

          <div className="form-address">
            <h3>Endereço</h3>
            <section className="forms">
              <div className="inputs">
                <label htmlFor="address">Logradouro</label>
                <input
                  type="text"
                  name="address"
                  className="adress"
                  required
                  value={values.endereco}
                  onChange={(e) =>
                    setValues({ ...values, endereco: e.target.value })
                  }
                />
              </div>
              <div className="inputs">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  name="cep"
                  className="cep"
                  required
                  value={values.cep}
                  onChange={(e) =>
                    setValues({ ...values, cep: e.target.value })
                  }
                />
              </div>
              <div className="box">
                <div className="inputs">
                  <label htmlFor="num">Nº</label>
                  <input
                    type="text"
                    name="num"
                    className="num"
                    required
                    value={values.numero}
                    onChange={(e) =>
                      setValues({ ...values, numero: e.target.value })
                    }
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="uf">UF</label>
                  <input
                    type="text"
                    name="uf"
                    className="uf"
                    required
                    value={values.uf}
                    onChange={(e) => setValues({ ...values, uf: e.target.value })}
                  />
                </div>
              </div>
            </section>
          </div>

          {<AlertWarning open={openwarn} setOpen={setOpenWarn} />}
          <button
            type="button"
            className="btn"
            onClick={() => sendCadastro()}
          >
            Enviar
          </button>
        </form>
      </Container>
    </>
  );
}
