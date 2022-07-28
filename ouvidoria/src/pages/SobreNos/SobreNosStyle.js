import styled from "styled-components";

export const Body = styled.main`

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Nanum+Gothic&family=Source+Sans+Pro&display=swap");


body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #f8f8ff;
  font-family: "Montserrat", sans-serif;
  color: #5a5757;
}
`;

export const NavBarSobre = styled.section`

header {
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
  }
  .owl {
    width: 10rem;
  }
  #logotipo {
    margin-left: 14%;
  }
  nav {
    justify-content: center;
    align-items: center;
    margin-right: 14%;
  }
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
  }
  ul li a:hover {
    border-bottom: 2px solid rgb(81, 230, 130);
  }
`;

export const DivAzul = styled.div`

.divAzul{
    padding-top: 8%;
    padding-bottom: 1%;
    background-color: #74ACE1;
    display: flex;
    justify-content:space-evenly;
}
.divCoruja{
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.divCoruja img{
    width: 15rem;   
}
.divTexto1{
    text-align: justify;
    font-size: 1.8rem;
    font-weight: 550;
    color: #282525;
    padding-right: 15%;
}
`;

export const DivBranca = styled.div`

.divBranca{
    padding: 5%;
    background-color: #E5E5E5;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.divTexto2{
    width: 50%;
}
.divTexto2 p {
    width: 80%;
    text-align: justify;
    font-size: 1.8rem;
    font-weight: 550;
    color: #2539EA;
}
.botao-time{
    margin-top: 2.5rem;
    font-weight: 600;
    font-size: 110%;
    text-align: center;
    width: 20rem; height: 3rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: #4DD14E;
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
}
.divWoman img{
    width: 22rem;
}
`;

export const FooterSobre = styled.section`

span{
    background-color: #1348aa;
    height: 8rem;
    display: flex;
    align-items: center;
}
#divFooter{
    width: 100%;
}
#rodape{
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
}
#copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    word-spacing: 3px;   
}
p > a{
    text-decoration: none;
    color: #ffff;
    word-spacing: 4px;
}
`;