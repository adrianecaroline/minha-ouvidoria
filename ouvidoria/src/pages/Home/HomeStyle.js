import styled from 'styled-components';

export const Principal = styled.section `
  display: flex;
  align-content: center;
  align-items: center;
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
`;