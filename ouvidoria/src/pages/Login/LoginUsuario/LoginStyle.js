import styled from "styled-components";

export const MainUser = styled.main` 
  display: flex;
  gap: 2rem;
  height: 5vh;
  


`;

export const BannerLogin = styled.section`
background-color: #1348AA;
height: 100vh;
width: 50%;
text-align: center;

}
h2 {
font-family: 'Nanum Gothic';
font-weight: 600;
font-size: 1.8125rem;
line-height: 2rem;
color: white;

margin-top: 6rem;
margin-left: 11.5625rem;
margin-right: 12.25rem;
}

img {
margin-top: 0.75rem;
width: 350px;}

`;

export const LoginArea = styled.section`

  height: 100vh;
  width: 50%npm;
  text-align: center;
  

  img{
    margin-right: 4rem;
    width: 375px;
  }

`;

export const LoginInput = styled.section`

 p{  
    color: #5F5D5D;
    font-family: 'Montserrat';
    font-weight: 600;
  
 }


 form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    
  }

  input[type="text"], input[type="password"]{
  
    width: 20.37rem;
    height: 2.375rem;
    border: 1px solid #5F5D5D;
    border-radius: 10px;
    
    margin-left: 10.06rem;
    margin-right: 11.56rem;
    padding: 0 0 0 1.25rem;
  }

  input[type="button"]{
    width: 8.8429rem;
    height: 2.5rem;
    border-radius: 10px;
     border-radius: 0.5rem;
  border-style: none;
  background-color: #7DCF3D;
  color: white;
  cursor: pointer;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
    
    
      
  :hover {
    background-color: #3a62b9;
    
    
    }
  }
`;

export const InfoLogin = styled.section`

  margin-left: 10.43rem;
  margin-right: 11.68rem;
  

  p{
    margin-bottom: 1.5rem;
  }


  input[type="button"]{
    height: 2.5rem;
    width: 10.06rem;
    border-radius: 10px;
     border-radius: 0.5rem;
  border-style: none;
  background-color: #7DCF3D;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
  
    
  }

`

;
