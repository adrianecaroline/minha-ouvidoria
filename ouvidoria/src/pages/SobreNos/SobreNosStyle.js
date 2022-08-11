import styled from "styled-components";

export const DivAzul = styled.div`
  .divAzul {
    margin-top: 2%;
    padding-top: 8%;
    padding-bottom: 2%;
    padding-left: 15%;
    padding-right: 15%;
    background-color: #a8c7e5;
    display: flex;
    justify-content: space-evenly;
    gap: 6.3rem;
  }
  .divCoruja {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 90rem;
  }
  .divCoruja img {
    width: 21rem;
  }
  .divTexto1 {
    font-size: 1.33rem;
    text-align: right;
    font-weight: 550;
    color: #282525;
    margin-left: 5rem;
    margin-right: 1rem;
  }

  @media (max-width: 1050px) {
    .divCoruja {
      width: 60rem;
    }
    .divCoruja img {
      width: 13rem;
    }
    .divTexto1 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 900px) {
    .divAzul {
      padding-top: 10%;
      padding-left: 8%;
      padding-right: 8%;
    }
    .divCoruja {
      width: 50rem;
    }
  }
  @media (max-width: 700px) {
    .divTexto1 {
      text-align: center;
      margin: 0;
    }
    .divCoruja {
      width: 50rem;
    }
  }
  @media (max-width: 550px) {
    .divAzul {
      padding-top: 18%;
      display: block;
      width: auto;
    }
    .divTexto1 {
      text-align: justify;
      font-size: 1.1rem;
      width: 90%;
      margin: auto;
    }
    .divCoruja {
      justify-content: center;
      width: 30rem;
    }
    .divCoruja img {
      width: 8rem;
    }
  }
`;

export const DivBranca = styled.div`
  .divBranca {
    padding: 0% 13%;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .divTexto2 {
    width: 50%;
  }
  .divTexto2 p {
    width: 80%;
    font-size: 1.4rem;
    text-align: left;
    font-weight: 550;
    color: #2539ea;
    margin: 0;
  }
  .botao-time {
    margin-top: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    width: 20rem;
    height: 3rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: #23e24c;
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
    font-family: "Montserrat", sans-serif;
    transition: background-color 0.4s linear;

    :hover {
      background-color: #3a62b9;
    }
  }
  .divWoman img {
    width: 22rem;
  }

  @media (max-width: 900px) {
    .divWoman img {
      width: 18rem;
    }
    .divBranca {
      padding-right: 8%;
    }
    .divTexto2 p {
      width: auto;
    }
  }
  @media (max-width: 770px) {
    .divTexto2 p {
      font-size: 1.3rem;
      width: 90%;
    }
    .botao-time {
      font-size: 1rem;
      width: 15rem;
      height: 3rem;
    }
  }
  @media (max-width: 550px) {
    .divBranca {
      width: auto;
    }
    .divTexto2 p {
      font-size: 1.1rem;
      text-align: left;
    }
    .divWoman img {
      width: 15rem;
    }
    .botao-time {
      margin-top: auto;
      font-size: 0.8rem;
      width: 10rem;
      height: 2.5rem;
      font-weight: 500;
    }
  }
`;
