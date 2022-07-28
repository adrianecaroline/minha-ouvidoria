import styled from "styled-components";

export const Container = styled.section`
  overflow-y: hidden;
  height: 100vh;
  background-color: #E7E7FC;

`;

export const Frame = styled.section `
  margin: 8% 12%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;

  img {
    width: 20rem;
  }     
  
`;

export const Frame2 = styled.div`
  width: 30rem;

  h1 {
    margin: 6% 0;
    font-size: 4rem;
  }

  h2 {
    font-size: 38px;
  }

  p {
    font-weight: 600;
  } 
`;

export const Btn = styled.button`
  width: 207px;
  height: 41px;
  background-color: #2539EA;
  border: none;
  border-radius: 3px;
  font-weight: bolder;
  font-size: 1rem;
  box-shadow: 0px 8px 9px -5px rgb(0 0 0 / 57%);
  transition: background-color 0.2s linear;
  cursor: pointer;
  color: #ffff;

  :hover {
    background-color: #3D65F3;
  }
`;