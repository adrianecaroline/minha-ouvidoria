import styled from 'styled-components';

export const Principal = styled.section `
  display: flex;
  align-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const Frame1 = styled.div `
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 5% 9%;  

  img {
    width: 360px;
    margin: 0;
  }

  h1 {
    font-size: 35px;
  }

  button {
    width: 160px;
    height: 50px;
    background-color: #6fd222;
    border: none;
    border-radius: 6px;
    font-weight: bolder;
    font-size: 1rem;
    transition: background-color 0.4s linear;
    cursor: pointer;
    box-shadow: 0 5px 6px 0 rgb(0 0 0 / 20%), 0 3px 9px 0 rgb(0 0 0 / 19%);
    color: #ffff;

    :hover {
      background-color: #3a62b9;
    }
  }

  @media (max-width: 980px) {

    img{
      width: 200px;
    }

    h1 {
      font-size: 26px;
    }

    button {
      width: 100px;
      height: 40px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    margin: 3% 0;
    width: 60%;

    h1 {
      font-size: 20px;
    }

  }

  @media (max-width: 400px) {
    margin: 10% auto;
    align-items: center;

    img{
      width: 180px;
    }

    h1 {
      font-size: 16px;
    }

    button {
      width: 80px;
      height: 30px;
      font-size: 10px;
      align-items: center;
    }
  }

`;

export const Frame2 = styled.div `
  display: flex;
  width: 55%;
  float: right;
  margin: 4% 1%;
  
  img {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 980px) {
    margin-right: 10%;
    width: 50%;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;