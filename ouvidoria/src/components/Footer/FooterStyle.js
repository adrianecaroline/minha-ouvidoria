import styled from "styled-components";

export const Frame = styled.footer `
  background-color: #1348aa;
  width: 100%;
  // height: 100px;
  align-items: center;


  @media(max-width: 920px) {
      font-size: 0.9rem;
      text-align: center;
      padding: 0;
      margin: 0;
  }

  @media(max-width: 860px) {
    width: 100%;
    flex-direction: column;
    gap: 0;

    // font-size: 0.9rem;
    // text-align: center;
    // // padding: 0;
    // // margin: 0;
    // // display: block;

    .info {
      align-items: center;
      gap: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // gap: 10rem;
  }

  p > a {
    text-decoration: none;
    color: #ffff;
    word-spacing: 4px;
    cursor: pointer;
  }

  .autorais {
    color: #ffff;
    word-spacing: 4px;
    text-align: center;
    padding: 20px 0;
  }
  
  
`;