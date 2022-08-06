import styled from "styled-components";

export const Frame = styled.footer `
  background-color: #1348aa;
  height: 100px;
  align-items: center;
  gap: 3rem;

  @media(max-width: 920px) {
      font-size: 0.9rem;
      text-align: center;
      padding: 0;
      margin: 0;
  }

  @media(max-width: 880px) {
    font-size: 0.9rem;
    text-align: center;
    // padding: 0;
    // margin: 0;
    // display: block;

    .info {
      display: block;
      align-items: center;
      gap: 1rem;
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
  }

  p > a {
    text-decoration: none;
    color: #ffff;
    word-spacing: 4px;
    cursor: pointer;
  }

  .autorais {
    margin-top: 20px;
    color: #ffff;
    word-spacing: 4px;
    text-align: center;
  }
  
  
`;