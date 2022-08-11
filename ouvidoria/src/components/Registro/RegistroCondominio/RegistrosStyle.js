import styled from "styled-components";

export const Container = styled.main `
//   background-color: #ffffff;
  width: 800px;
//   height: 350px;
//   border-radius: 6px;
//   box-shadow: 0px 3px 4px 1px rgb(0 0 0 / 25%);
  padding: 10px 30px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 290px;
  border-top: 1px solid;

  @media (max-width: 600px) {
    width: 350px;
    height: 480px;
}
    
`

export const Registro = styled.section `
    display: flex;
    gap: 6.5rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }
`

export const Feedback = styled.section `
    
    .box {
        border: none;
        background: #e9e9e9;
        border-radius: 3px;
        padding: 8px;
    }

    button {
        border-radius: 3px;
        padding: 8px;
        border: 0;
        background: #29F131;
        color: #ffff;
        width: 85px;
        box-sizing: border-box;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        margin-left: 0.8rem;
    }

    .feedback-msg {
        margin-left: 2.5rem;
    }

    @media (max-width: 600px) {
        
        .msg {
            display: flex;
            flex-direction: column;
            margin: 1rem 0 1rem 0;
        }
    }
`