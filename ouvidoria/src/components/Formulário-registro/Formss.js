// import styles from './Forms.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { 
  FormMain, 
  Selection, 
  FormSection, 
  Descricao, 
  Endereco, 
  SInputs, 
  SubInputs
} from './FormsStyle.js'

import { BiArrowBack } from "react-icons/bi";

export default function Formss (props) {
  const navigate = useNavigate();

  const [values, setValues] = useState();
  
  const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickBtn = () => {
    // console.log(values)
    Axios.post("http://localhost:4200/register", {
      id_usuario: "Danilo", 
      tipo_registro: `${props.registro}`,
      assunto_registro: values.selection,
      titulo: values.titulo,
      descricao: values.descricao,
      endereco: values.local, 
      numero: values.numero
    }).then((response) => {
      console.log(response)
    })
  };

  return (
    <FormMain>
      <BiArrowBack size={35} onClick={() => { navigate(window.history.back());}} />
      <h1>{props.frase} {props.registro} </h1>
      <form>
          <Selection>
            <label htmlFor="selection">Sobre qual assunto você quer falar: </label>
            <select name="selection" onChange={handleChangeValues} >
              <option disabled  defaultValue= "Selecione" >Selecione</option>
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
              <input type="text" name="titulo" onChange={handleChangeValues} />
              <label htmlFor="descricao">Descrição</label>
              <textarea row="10"  name="descricao" onChange={handleChangeValues}></textarea>
            </Descricao>

            {/* <!--Endereço da solicitação--> */}
            <Endereco>
              <h1>Endereço</h1>
              <label htmlFor="local">Local do fato</label>
              <input type="text" name="local" onChange={handleChangeValues}/>
              <SInputs>
                <SubInputs>
                  <label htmlFor="numero">Nº</label>
                  <input type="number" name="numero" onChange={handleChangeValues}/>
                </SubInputs>
                <SubInputs>
                  <label htmlFor="cep">CEP</label>
                  <input type="number" name="cep" onChange={handleChangeValues} />
                </SubInputs>
                <SubInputs>
                  <label htmlFor="uf">UF</label>
                  <input type="text" name="uf" onChange={handleChangeValues} />
                </SubInputs>
              </SInputs>
              <p>
                Incluir anexos:
                <input type="file" name='url' onChange={handleChangeValues} />
                
              </p>
            </Endereco>
          </FormSection>

          {/* <!--Botão para submeter as informações--> */}
          <input type="button" defaultValue="Enviar" onClick={() => handleClickBtn()} />
        </form>
      </FormMain>
  )

}