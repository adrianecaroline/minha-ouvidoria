// import styles from './Forms.module.css'
import { useState } from 'react'
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

export default function Formss (props) {

  const [values, setValues] = useState();
  
  const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickBtn = () => {
    Axios.post("http://localhost:8080/ouvidoria", {
      usuario: "Joana1", 
      tipo_registro: `${props.registro}`,
      assunto_registro: values.selection,
      titulo: values.titulo,
      descricao: values.descricao,
      endereco: values.endereco,
      cep: values.cep,
      numero: values.numero,
      uf: values.uf,
      url: values.url
    }).then((response) => {
      console.log(response)
    })
  };

  return (
    <FormMain>
      <h1>Faça a sua {props.registro} </h1>
      <form>
          <Selection>
            <label htmlFor="selection">Sobre qual assunto você quer falar: </label>
            <select name="selection" onChange={handleChangeValues} >
              <option disabled selected>Selecione</option>
              <option defaultValue="ilumincacao">Iluminação</option>
              <option defaultValue="arborizacao">Arborização</option>
              <option defaultValue="coletalixo">Coleta de lixo</option>
              <option defaultValue="pavimentacao">Pavimentação</option>
              <option defaultValue="ciclovia">Ciclovia</option>
              <option defaultValue="saneamento">Saneamento básico</option>
              <option defaultValue="Outro">Outro</option>
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
                  <input type="text" name="uf" onChange={handleChangeValues}/>
                </SubInputs>
              </SInputs>
              <p>
                Incluir anexos:
                <input type="file" name='url' onChange={handleChangeValues} />
                {/* <input type="file" defaultValue="Incluir Anexos" /> */}
              </p>
            </Endereco>
          </FormSection>

          {/* <!--Botão para submeter as informações--> */}
          <input type="button" defaultValue="Enviar" onClick={() => handleClickBtn()} />
        </form>
      </FormMain>
  )

}