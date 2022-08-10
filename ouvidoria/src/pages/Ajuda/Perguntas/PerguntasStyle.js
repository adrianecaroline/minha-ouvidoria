import styled from "styled-components";

export const Container = styled.section`
  margin: 4% 14%;
  padding-top: 3%;

  h1 {
    color: #235ae2;
  }

  h2 {
    margin-top: 2%;
    font-size: 20px;
  }

  p {
    text-align: justify;
  }

  span {
    color: #235ae2;
    cursor: pointer;

    :hover {
      color: #163a89;
    }
  }

  @media (max-width: 800px) {
    padding-top: 10%;
  }

  @media (max-width: 600px) {
    margin: 4% 8%;
    padding-top: 10%;
  }
`;
