import styled from "styled-components";

export const FormMain = styled.main `
  margin: 4% 14%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 28px;
  }

  input[type="button"] {
    background-color: #23e24c;
    color: #ffff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    width: 30%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2% 35%;
    cursor: pointer;
  }
`;

export const Selection = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  select {
    background-color: #EDEDED;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 400px;
    box-sizing: border-box;
  }
`;

export const FormSection = styled.section `
  display: flex;
  align-items: flex-start;
  justify-content: space-between; 

`;

export const Descricao = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h1 {
    font-size: 20px;
    color: #235ae2;
    text-align: initial;
  }

  input {
    background-color: #EDEDED;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 400px;
    box-sizing: border-box;
  }

  textarea {
    background-color: #EDEDED;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 379px;
    height: 120px;
  }

`;

export const Endereco = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  input {
    background-color: #EDEDED;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 400px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 20px;
    color: #235ae2;
    text-align: initial;
  }

  input [type="text"]{
    background-color: #EDEDED;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 400px;
    box-sizing: border-box;
  }

  input[type="file"]{
    background-color: transparent;
    padding: 0;
  }
`;

export const SInputs = styled.div `
  display: flex;
  gap: 2.4rem;
`;

export const SubInputs = styled.div `
  display: grid;
  gap: 0.5rem;

  input[type="text"] {
    width: 86px;
  }

  input[type="number"] {
    width: 120px;
  }
`;