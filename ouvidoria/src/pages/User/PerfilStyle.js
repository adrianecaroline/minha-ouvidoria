import styled, { css } from "styled-components";

export const Container = styled.main `
  margin: 4% 5%;
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  h3 {
    font-size: 20px;
  }


  section {
    // height: 460px;
    padding: 6px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 8px;
    } 
    ::-webkit-scrollbar-thumb {   
      background-color: darkgrey;   
    }

    > h3 {
      font-size: 25px;
    }

    @media (max-width: 870px){
      // height: 380px;
      width: 300px;
  
    > h3 {
      font-size: 18px;
      }
  
    }
  }

  @media(max-width: 800px) {
    margin: 8% 1%;
  }

  @media(max-width: 600px) {
    margin: 16% 1%;
    
  }

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

  @media (max-width: 870px){
    width: 300px;
    height: 380px;

    h3 {
      font-size: 16px;
    }
  }
`;

export const UserInfo = styled.div `
  display: flex;
  flex-direction: column;
  height: 250px;
  margin: 5% 11%;
  padding: 0 10px;

  p {
    font-size: 16px;
    margin: 0.6rem 0;
  }

  @media (max-width: 870px){
    margin: 2% 11%;

    p {
      font-size: 14px;
      margin: 0.rem 0;
    }
  }
`;

export const BtnUser = styled.div `
  margin: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: space-around;
  align-content: center;

  @media (max-width: 870px){
    margin: 1px;
    gap: .6rem;
  }

`;

export const Botao = styled.button `
  padding: 8px;
  width: 100px;
  border: none;
  border-radius: 3px;
  color: #f9f9f9;
  font-weight: bolder;
  cursor: pointer;
  background-color: #6fd222;
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 35%);

  ${props => props.primary && css`
      background: red;
      color: white;
  `};
`;

export const Frame = styled.div `
  margin: 2% 8%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .carrossel {
    width: 360px;
    height: 400px;

    > h3 {
      color: #2539ea;
      text-align: center;
      font-size: 25px;
    }

    .box {
      display: flex;
      /* align-content: center; */
      align-items: center;
      justify-content: space-between;
    }

    .card {
      display: flex;
      width: 112px;
      height: 160px;
      border-radius: 3px;
      margin-top: 16%;
      box-sizing: border-box;
      padding: 20px;
      justify-content: center;
      background-color: #ffff;
      box-shadow: 2px 3px 5px 1px rgb(0 0 0 / 25%);
      cursor: pointer;
      transition-duration: 0.3s;
      transition-property: transform;

      :hover{
        transform: scale(1.1);
      }
    }
    
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      > img {
        width: 50px;
      }
    }
    
    @media (max-width: 870px){
      width: 300px;
      height: 360px;
      
      > h3 {
        color: #2539ea;
        text-align: center;
        font-size: 20px;
      }

      > .box {
        width: 100px;
        height: 100px;
        border-radius: 3px;
        margin-top: 16%;
        box-sizing: border-box;
        padding: 20px;
      }

      > .card {
        width: 100px;
        height: 100px;
        margin: 1% 6%;
        padding: 18px;
      }

      > .icon {
        width: 30px;
      }
    }

  }

  .profile {
    width: 24rem;
  }

`;