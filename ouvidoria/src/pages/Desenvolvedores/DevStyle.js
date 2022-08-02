import styled from "styled-components";


export const Dev = styled.section `
    overflow-y: hidden;
    height: 100vh;
`;

export const MainDev = styled.main `
  // margin: 6% 10%;
  margin-top: 10%;
  padding-top: 3%;
  height: 260px;
  // background: #245ad1e8;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  div {
    height: 200px;
    width: 200px;
  }

  .card-dev {
    height: 240px;
    width: 198px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    flex-direction: column;
    align-content: center;
    gap: 1rem;
    background-color: #e0e5eded;;
    border-radius: 3px;

  }

  .perfil {
    height: 3rem;
    width: 12.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
  }

  svg {
    cursor: pointer;
  }

  img {
    width: 10rem;
    border-radius: 50%;
  }

`;