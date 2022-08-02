import styled from "styled-components";

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
    font-size: 1.4rem;
    font-weight: 550;
    color: #282525;
    padding-right: 15%;
}
`;

export const DivBranca = styled.div`

.divBranca{
    padding: 3% 15%;
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
    font-size: 1.4rem;
    font-weight: 550;
    color: #2539EA;
}
.botao-time{
    margin-top: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    width: 20rem; height: 3rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: #23e24c;
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
    font-family: "Montserrat", sans-serif;
}
.divWoman img{
    width: 22rem;
}
`;

// export const FooterSobre = styled.section`

// span{
//     background-color: #1348aa;
//     height: 8rem;
//     display: flex;
//     align-items: center;
// }
// #divFooter{
//     width: 100%;
// }
// #rodape{
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     text-align: center;
//     margin-left: 20%;
//     margin-right: 20%;
// }
// #copyright{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #ffff;
//     word-spacing: 3px;   
// }
// p > a{
//     text-decoration: none;
//     color: #ffff;
//     word-spacing: 4px;
// }
// `;