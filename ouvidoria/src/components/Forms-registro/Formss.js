import { useState } from "react";
import {
  FormMain,
  Selection,
  FormSection,
  Descricao,
  Endereco,
  SInputs,
  SubInputs,
} from "./FormsStyle.js";
import AlertSuccess from "../Alert/AlertSuccess.js";
import AlertWarning from "../Alert/AlertWarning.js";
import { BiArrowBack } from "react-icons/bi";
import { axiosInstance } from '../../api_services/ouvidoriaApi';
//import axios from "axios";

export default function Formss(props) {


  const [open, setOpen] = useState(false);
  const [openwarn, setOpenWarn] = useState(false);

  const [values, setValues] = useState({
    username: "",
    registro: `${props.registro}`,
    selection: "",
    titulo: "",
    descricao: "",
    endereco: "",
    numero: "",
    url: "",
  });

  function submitForm() {
    console.log(props.user);
    if (
      values.registro === "" ||
      values.selection === "" ||
      values.titulo === "" ||
      values.descricao === "" ||
      values.endereco === "" ||
      values.numero === ""
    ) {
      console.log("campos inválidos");
      setOpenWarn(true)

    } else {
      const bodyFormData = new FormData();

      bodyFormData.append("id_usuario", props.user.username);
      bodyFormData.append("tipo_registro", values.registro);
      bodyFormData.append("assunto_registro", values.selection);
      bodyFormData.append("titulo", values.titulo);
      bodyFormData.append("descricao", values.descricao);
      bodyFormData.append("endereco", values.endereco);
      bodyFormData.append("numero", values.numero);
      bodyFormData.append("url", values.url);

      axiosInstance({
        method: "post",
        url: `${process.env.REACT_APP_BACK}/register/auth`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          setOpen(true);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }

  return (
    <FormMain>
      <BiArrowBack
        size={35}
        onClick={() => {
          window.history.back();
        }}
      />
      <h1>
        {props.frase} {values.registro}{" "}
      </h1>
      <form>
        <Selection>
          <label htmlFor="selection">
            Sobre qual assunto você quer falar:{" "}
          </label>
          <select
            name="selection"
            value={values.selection}
            onChange={(e) =>
              setValues({ ...values, selection: e.target.value })
            }
          >
            <option defaultValue="Selecione">
              Selecione
            </option>
            <option value="ilumincacao">Iluminação</option>
            <option value="arborizacao">Arborização</option>
            <option value="coletalixo">Coleta de lixo</option>
            <option value="pavimentacao">Pavimentação</option>
            <option value="ciclovia">Ciclovia</option>
            <option value="saneamento">Saneamento básico</option>
            <option value="Outro">Outro</option>
          </select>
        </Selection>

        {/* <!--Descrição da solicitação--> */}
        <FormSection>
          <Descricao>
            <h1>Descrição</h1>
            <label htmlFor="titulo">Título da {props.registro}</label>
            <input
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={(e) => setValues({ ...values, titulo: e.target.value })}
            />
            <label htmlFor="descricao">Descrição</label>
            <textarea
              row="10"
              name="descricao"
              value={values.descricao}
              onChange={(e) =>
                setValues({ ...values, descricao: e.target.value })
              }
            ></textarea>
          </Descricao>

          {/* <!--Endereço da solicitação--> */}
          <Endereco>
            <h1>Endereço</h1>
            <label htmlFor="local">Local do fato</label>
            <input
              type="text"
              name="local"
              value={values.endereco}
              onChange={(e) =>
                setValues({ ...values, endereco: e.target.value })
              }
            />
            <SInputs>
              <SubInputs>
                <label htmlFor="numero">Nº</label>
                <input
                  type="number"
                  name="numero"
                  value={values.numero}
                  onChange={(e) =>
                    setValues({ ...values, numero: e.target.value })
                  }
                />
              </SubInputs>
              <SubInputs>
                <label htmlFor="url">Inlcuir anexos</label>

                <input
                  type="file"
                  name="url"
                  onChange={(e) =>
                    setValues({ ...values, url: e.target.files[0] })
                  }
                />
              </SubInputs>
            </SInputs>
          </Endereco>
        </FormSection>

        {<AlertSuccess open={open} setOpen={setOpen} />}
        {<AlertWarning open={openwarn} setOpen={setOpenWarn} />}
        <input
          type="button"
          defaultValue="Enviar"
          onClick={() => submitForm()}
        />
      </form>
    </FormMain>
  );
}
