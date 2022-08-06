import styled from "styled-components";

export const Container = styled.main`
  margin: 4% 14%;
  padding-top: 3%;

  h2 {
    color: #235ae2;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 20rem;
  }

  span a {
    text-decoration: none;
    color: #235ae2;
    cursor: pointer;
  }

  a:hover {
    color: #163a89;
  }

  p {
    text-align: justify;
  }

  @media (max-width: 800px) {
    padding-top: 10%;
  }

  @media (max-width: 600px) {
    margin: 4% 8%;
    padding-top: 10%;
  }
`;
