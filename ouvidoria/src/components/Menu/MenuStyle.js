import styled from "styled-components";

export const Header = styled.header `
  width: 100%;
  height: 70px;
  background-color: #235ae2;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  img {
    width: 10rem;
    margin-left: 14%;
  }

  .mobile {
    display: none;
  }
  
  @media(max-width: 900px) {
    .mobile {
      display: initial;
      padding-right: 4rem;
      cursor: pointer;
    }
    
    img {
      width: 10rem;
      margin-left: 4.2rem;
    }

    nav, button {
      display: none;
    }

    @media(max-width: 500px) {
      img {
        width: 8rem;
        margin-left: 2rem;
      }

      .mobile {
        padding-right: 2rem;
      }
    }
  }
`;

export const Nav = styled.nav `
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  li a {
    text-decoration: none;
    list-style-type: none;
    color: aliceblue;
    font-size: 18px;
    margin-right: 20px;
    padding: 22px 4px;
    word-spacing: 4px;
    cursor: pointer;
  }
  
  li a:hover {
    border-bottom: 2px solid rgb(81, 230, 130);
  }
`;

export const Btn = styled.button `
  width: 80px;
  margin-right: 14%;
  border: none;
  padding: 10px;
  border-radius: 3px;
  background-color: #ffffff; 
  font-weight: bold;
  color: #235ae2;
  cursor: pointer;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  :hover {
  background-color: #9e9ec2;
  color: #ffffff;
  }

`;