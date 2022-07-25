import styled from "styled-components";

export const MainLogin = styled.main `
  display: flex;
  gap: 2rem;
  // height: 100vh;

`;

export const Banner = styled.section `
  background-color: #1348AA;
  // height: 100vh;
  width: 50%;
  text-align: center;

  h2 {
    font-weight: 600;
    font-size: 1.8125rem;
    line-height: 2rem;
    color: white;

    margin-top: 6rem;
    margin-left: 11.5625rem;
    margin-right: 12.25rem;
  }

  img {
    margin-top: 5.75rem;
    width: 350px;
  }

`;

export const AreaLogin = styled.section `
  // height: 100vh;
  width: 50%;
  text-align: center;

  img {
    margin-right: 4rem;
    margin-top: 8rem;
    width: 20rem;
  }
`;

export const Opcoes = styled.div `
  margin-top: 2rem;

  h3 {
    color: #1348AA;
    margin: 2%;
    font-weight: 600;
    font-size: 1.5rem;
  }  

 
`;

export const InputLogin = styled.div `
  display: flex;
  gap: 1rem;
  justify-content: center;

  input {
    cursor: pointer;
    background-color: #4DD14E;
    width: 10rem;
    height: 2rem;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 1.125rem;
    font-weight: 600;
    filter:  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: background-color 0.3s linear;
    

    :hover {
      background-color: #3a62b9;
    }
  }
`;