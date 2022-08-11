import styled from "styled-components";

export const Principal = styled.section`
  display: flex;
  align-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;

export const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 5% 9%;
  gap: 1rem;

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
    background-color: #23e24c;
    border: none;
    border-radius: 6px;
    font-weight: bolder;
    font-size: 1rem;
    transition: background-color 0.4s linear;
    cursor: pointer;
    box-shadow: 0 5px 3px 0 rgb(0 0 0 / 20%), 0 3px 9px 0 rgb(0 0 0 / 19%);
    color: #ffff;
    font-family: "Montserrat";

    :hover {
      background-color: #3a62b9;
    }
  }

  @media (max-width: 980px) {
    img {
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
    margin: 0;
    width: 80%;

    h1 {
      margin: 2.4rem auto;
      font-size: 1.7rem;
      text-align: center;
    }

    img {
      width: 18rem;
      margin: 0 auto;
    }

    button {
      width: 10rem;
      height: 40px;
      font-size: 1.1rem;
      margin: 0 auto;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 16rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    button {
      width: 10rem;
      height: 40px;
      font-size: 1rem;
      align-items: center;
    }
  }
`;

export const Frame2 = styled.div`
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

  @media (max-width: 600px) {
    display: none;
  }
`;
