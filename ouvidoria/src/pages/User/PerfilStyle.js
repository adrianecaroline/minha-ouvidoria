import styled from "styled-components";

export const Container = styled.main `
  margin: 4% 5%;
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;  

`;

export const FrameUser = styled.div `
  border-radius: 6px;
  width: 360px;
  height: 460px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.35);
  background-color: #ffff;

  h3 {
    color: #ffff;
    background-color: #5072fe;
    height: 60px;
    font-size: 20px;
    margin: 0%;
    padding-left: 20px;
    display: grid;
    align-items: center;
    border-radius: 6px 6px 0px 0px;
  }
`;

export const UserInfo = styled.div `
  display: flex;
  flex-direction: column;
  height: 250px;
  margin: 5% 11%;
  padding: 0 10px;
`;

export const BtnUser = styled.div `
  margin-top: 4rem;
  justify-content: space-evenly;
  display: flex;
  align-content: center;

  input[type="button"] {
    padding: 8px;
    border: none;
    border-radius: 3px;
    color: #f9f9f9;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 35%);
    
    .btn1 {
      background-color: #6fd222;
    }
  }

`;

// export const BtnEdt = styled.span `
//   background-color: #6fd222;
// `;