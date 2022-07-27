import styled, { css } from "styled-components";

export const Container = styled.main `
  margin: 4% 14%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 28px;
  }

  h3 {
    color: #235ae2;
  }

  .form-data {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  
  .form-address {
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  input {
    background-color: #ededed;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 400px;
    box-sizing: border-box;
  }

  .inputs {
    display: grid;
    gap: 0.5rem;
  }
  
  .forms {
    display: flex;
    justify-content: space-between;
  }
  
   .senha, .confirmar, .cep{
    width: 260px;
  }
  
  .uf, .num{
    width: 100px;
  }
  
  .btn {
    width: 30%;
    margin: 3% 35%;
    padding: 10px;
    background-color: #23e24c;
    color: #ffff;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const Password = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;