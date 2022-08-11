import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  height: 290px;
  border-top: 1px solid;

  span {
    font-weight: bold;
  }
  @media (max-width: 900px) {
    width: 350px;
    height: 500px;
  }
`;

export const Registro = styled.section`
  display: flex;
  gap: 6.5rem;

  span {
    font-weight: bold;
  }
`;

export const Feedback = styled.section`
  .box {
    border: none;
    background: #e9e9e9;
    border-radius: 3px;
    padding: 8px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }

  button {
    border-radius: 3px;
    padding: 8px;
    border: 0;
    background: #29f131;
    color: #ffff;
    width: 85px;
    box-sizing: border-box;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  gap: 0.8rem;

  .feedback-msg {
    margin-left: 2.5rem;
  }

  @media (max-width: 900px) {
    .msg {
      display: flex;
      flex-direction: column;
      margin: 1rem 0 1rem 0;
    }
  }
`;
