import styled from "styled-components";

export const Container = styled.main `
    margin: 4% 14%;
    padding-top: 3%;

    h1 {
        // text-align: center;
        font-size: 28px;
        padding-left: 2rem;
      }

  @media (max-width: 900px) {
    padding-top: 10%;
    margin: 4% 3%;
  }
`

export const Section = styled.section`
  padding: 10px 30px;
  box-sizing: border-box;
  
  .principal {
    background-color: #ffffff;
    border-radius: 6px;
    padding: 1px 30px;
    box-sizing: border-box;
    box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 41%);
    // height:800px;

    // overflow-y: auto;
    // overflow-x: hidden;

    // ::-webkit-scrollbar {
    //   width: 8px;
    // }
    // ::-webkit-scrollbar-thumb {
    //   background-color: darkgrey;
    // }

    .p {
      padding-left: 1.6rem;
    }
  }
  
  .cabecalho {
    margin: 0 auto;
    width: 800px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bdb3b3;
  }

  h3 {
    padding: 16px;
    margin: 0;
    cursor: pointer;

    :hover {
      background: #f3f3f3;
    }
  }

  @media (max-width: 900px) {

    .cabecalho {
      display: flex;
      flex-direction: column;
      width: 350px;
      text-align: center;
    }
  }
`;