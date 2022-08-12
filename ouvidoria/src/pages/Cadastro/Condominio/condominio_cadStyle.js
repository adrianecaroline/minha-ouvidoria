import styled, { css } from "styled-components";

export const Container = styled.main `
  margin: 4% 14%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
    margin-top: 2%;
  }

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
    margin-bottom: 1rem;
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

  @media(max-width: 1070px) {
    padding-top: 5%;

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
    
    input {
      background-color: #ededed;
      border: none;
      border-radius: 3px;
      padding: 10px;
      width: 350px;
      box-sizing: border-box;
    }
  
    .inputs {
      display: grid;
      gap: 0.5rem;
      width: 350px;
    }
    
    .forms {
      display: flex;
      justify-content: space-between;
    }
    
     .cep{
      width: 200px;
      margin-left: 30px;
    }
    
    .uf, .num{
      width: 100px;
      margin-left: 10px;
      margin-right: 5px;
    }
    
  }
  }
  
  @media (max-width: 900px) {
    padding-top: 5%;

    h1 {
      text-align: center;
      font-size: 25px;
    }
  
    h3 {
      color: #235ae2;
      font-size: 15px;
    }
  
    .form-data {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    
    input {
      background-color: #ededed;
      border: none;
      border-radius: 3px;
      padding: 8px;
      width: 260px;
      box-sizing: border-box;
    }
  
    .inputs {
      display: grid;
      gap: 0.5rem;
      width: 250px;
    }
    
    .forms {
      display: flex;
      justify-content: space-between;
    }
    
     .cep{
      width: 145px;
      margin-left: 30px;
    }
    
    .uf, .num{
      width: 100px;
      margin-left: 10px;
      margin-right: 5px;
    }
    
  }
} 


@media (max-width: 700px) {
  padding-top: 6%;


  h1 {
    text-align: center;
    font-size: 25px;
  }

  h3 {
    color: #235ae2;
    font-size: 15px;
    text-align: center;
    
  }

  .form-data {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  
  input {
    background-color: #ededed;
    border: none;
    border-radius: 3px;
    gap: 10rem;
    margin: 2% 50%;
    padding: 8px;
    width: 250px;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    
    
   
  }

  .inputs {
    gap: 0.5rem;
    width: 250px;
    display: flex;
   flex-direction: column;
   justify-content: center;
    
    
  }
  
  .forms {
    justify-content: center;
    display: flex;
   flex-direction: column;
   
  
  }
  
   .cep{
    width: 145px;
    margin-left: 30px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 10rem;
    margin: 2% 50%;
  }
  
  .uf, .num{
    width: 100px;
    margin-left: 10px;
    margin-right: 5px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 10rem;
    margin: 2% 50%;
  }
  
}

`;

export const Password = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;