import styled from "styled-components";

export const Container = styled.main`
display: flex;
gap: 7rem;
justify-content: space-around;
margin: 4% 14%;
padding-top: 3%;

@media (max-width: 1200px){
    padding-top: 5%;
}
@media (max-width: 900px){
    padding-top: 8%;
}
`;

export const Banner = styled.div`
h3{
   height: 8rem;
}
img{
    width: 24rem;
}

@media (max-width: 1300px){
    img{
        width: 25rem;
    }
}
@media (max-width: 1200px){
    img{
        width: 22rem;
        margin-left: -10px;
    }
}
@media (max-width: 1180px){
    img{
        margin-right: 10px;
        margin-left: -30px;
    }
}
@media (max-width: 1010px){
    display: none;
}
`;

export const FormContact = styled.div`
border-radius: 6px;
width: 380px;
height: 460px;
box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.35);
background-color: #ffff;

h3 {
    text-align: center;    
    color: #ffff;
    background-color: #5072fe;
    height: 60px;
    font-size: 1.4rem;
    margin: 0%;
    display: grid;
    align-items: center;
    border-radius: 6px 6px 0px 0px;
}

form > div{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}
.input-dados input{
    background-color: #ededed;
    border: none;
    border-radius: 3px;
    padding: 1rem;
    width: 90%;
    box-sizing: border-box;
}
input::placeholder{
    font-size: 1rem;
}
textarea::placeholder{
    font-size: 1.2rem;
}
textarea{
    background-color: #ededed;
    border: none;
    border-radius: 3px;
    padding: 1rem;
    width: 90%;
    height: 10rem;
    box-sizing: border-box;
}

.enviar-dados input{
    width: 30%;
    margin: 2% 35%;
    padding: 10px;
    background-color: #23e24c;
    color: #ffff;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

}
`;
