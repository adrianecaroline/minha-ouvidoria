import styled, { css } from "styled-components";

export const Container = styled.main `
    margin: 3% 10%;
    padding-top: 3%;

    .form-data {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    .forms {
        display: flex;
        gap: 2rem;
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
        margin-top: 0.5rem;
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

    .nomeCompleto, .email, .condominio {
        width: 30rem;
    }
    
    .data, .bloco, .numero, .CEP, .UF {
        width: 12.5rem;
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
    width: 30%;
    margin: 1% 35%;
    padding: 10px;
    background-color: #23e24c;
    color: #ffff;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

`