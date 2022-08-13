import styled from "styled-components";

export const Container = styled.main `
    margin: 4% 14%;
    padding-top: 1%;

    svg {
        cursor: pointer;
        margin-top: 2%;
    }

    .form-data {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        margin-bottom: 1rem;
    } 

    .forms {
        display: flex;
        justify-content: space-between;
    }

    h1 {
        text-align: center;
        font-size: 28px;
    }

    h3 {
        color: #235ae2;
    }

    .input-dados {
        display: grid;
        gap: 1rem;
      }

    input {
        background-color: #ededed;
        border: none;
        border-radius: 3px;
        padding: 10px;
        width: 400px;
        box-sizing: border-box;
    }

    .nome-escuro{
        font-weight: bold;
        font-size: 110%;
        margin-bottom: 10px;
      }

    .CPF,  .senha, .confirmarSenha {
        width: 15.5rem;
    }

    #UserName {
        width: 12.5rem;
    }
    
    .data, .CEP {
        width: 12.5rem;
    }

    .bloco, .numero {
        width: 10rem;
    }

    .UF {
        width: 6rem;
    }

    @media (max-width: 1070px) {
        padding-top: 5%;

        .nomeCompleto, .email, .username, .condominio {
            width: 22rem;
        }
    }

    @media (max-width: 900px) {
        padding-top: 5%;

        .nome-escuro {
            font-weight: bold;
            font-size: 100%;
            margin-bottom: 10px;
        }

        .nomeCompleto, .email, .username, .condominio {
            width: 16rem;
        }

        .CPF, .data-900, .senha, .confirmarSenha, .bloco, .numero {
            width: 10rem;
        }
        svg {
            margin-top: 8%;
            cursor: pointer;
        }
    }

    @media (max-width: 700px) {
        padding-top: 6%;

        h3 {
            text-align: center;
        }

        .forms {
            display: flex;
            flex-direction: column;
        }

        .input-dados {
            justify-content: center;
        }

        .nomeCompleto, .email, .username, .condominio, .CPF, .data-900, .senha, .confirmarSenha, .bloco, .numero, .CEP, .UF {
            width: 20rem;
        }

        .info-senha p {
            margin: 0.5rem 0 0.5rem 7.5rem;
        }
    }

    @media (max-width: 470px) {
        padding-top: 12%;

        .forms {
            align-items: flex-start;
        }

        .nomeCompleto, .email, .username, .condominio, .CPF, .data-900, .senha, .confirmarSenha, .bloco, .numero, .CEP, .UF {
            width: 17rem;
        }
    }

    @media (max-width: 435px) {
        h1 {
          font-size: 22px;
        }

        h3 {
            text-align: initial;
        }
    }

`

export const Checkbox = styled.section `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2% 10%;

    @media (max-width: 700px) {
        text-align: center;

        .termos {
            margin: 0.5rem 4.5rem 0 0;
        }
    }
`

export const ButtonCad = styled.button `
    width: 23%;
    margin-left: 38%;
    margin-right: 38%;
    margin-bottom: 3%;
    padding: 10px;
    background-color: #23e24c;
    color: #ffff;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 32%;
        margin-left: 34%;
        margin-right: 34%;
    }

`