import styled from "styled-components";

export const MainUser = styled.main` 
  display: flex;
  gap: 2rem;
  height: 100vh;
  
`;

export const BannerLogin = styled.section`
  background-color: #1348AA;
  height: 100vh;
  width: 50%;
  text-align: center;

  }

  h2 {
    font-weight: 600;
    font-size: 1.8125rem;
    line-height: 2rem;
    color: white;
    margin-top: 6rem;
    margin-left: 10rem;
    margin-right: 10rem;
  }

  img {
    margin-top: 0.75rem;
    width: 350px;
  }

  @media(max-width: 1000px) {
    h2 {
      font-size: 1.2rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }

    img {
      margin-top: 0.75rem;
      width: 300px;
    }
  }
  @media(max-width: 820px) {
    h2 {
      font-size: 1.2rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }

    img {
      margin-top: 0.75rem;
      width: 280px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LoginArea = styled.section`

  height: 100vh;
  width: 50%;
  text-align: center;
  
  h3{
    margin-top: 2rem;
    margin-bottom: 0;
    width: 6rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  img {
    
    width: 18rem;
  }

  @media (max-width: 1000px) {
    img {
      width: 16rem;
    }
  }
  @media (max-width: 820px) {
    img {
      width: 14.8rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LoginInput = styled.section`

 p {  
    color: #5F5D5D;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.4rem;
 }

 form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  input[type="text"], input[type="password"] {
    width: 20.37rem;
    height: 2.375rem;
    border: none;
    border-radius: 3px;
    
    // margin-left: 10.06rem;
    // margin-right: 11.56rem;
    padding: 0 0 0 1.25rem;

    background-color: #EDEDED;
  }

  input[type="button"]{
    width: 8.8429rem;
    height: 2.5rem;
    border-radius: 3px;
    border-style: none;
    background-color: #3fab40;
    color: white;
    cursor: pointer;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.35);
    
    font-size: 0.9rem;
    font-weight: 600;
    font-family: 'Montserrat';

    :hover {
      background-color: #3a62b9;
    }
 }

 @media (max-width: 1000px){
    input[type="text"], input[type="password"] {
      width: 16rem;
      height: 2rem;
    }

    input[type="button"]{
      width: 6rem;
      height: 2rem;
      font-size: 0.7rem;
    }
 }
 @media (max-width: 820px){
    input[type="text"], input[type="password"] {
      width: 15rem;
      height: 2rem;
    }

    input[type="button"]{
      width: 6rem;
      height: 2rem;
      font-size: 0.7rem;
    }
 }
 }
`;

export const InfoLogin = styled.section`
  // margin-left: 10.43rem;
  // margin-right: 11.68rem;

  p {
    margin-bottom: 1.5rem;
  }

  span {
    color: #1348AA;
    cursor: pointer;
  }

  input[type="button"] {
    height: 2.5rem;
    width: 10.06rem;
    border-radius: 3px;
    border-style: none;
    background-color: #3fab40;
    color: white;
    cursor: pointer;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.35); 
    font-size: 0.9rem;
    font-weight: 600;
    font-family: 'Montserrat';
  
    :hover {
      background-color: #3a62b9;
    }
  }

  @media (max-width: 1000px){
    input[type="button"] {
      height: 2rem;
      width: 8rem;
      font-size: 0.7rem;
    }
  }
  @media (max-width: 820px){
    input[type="button"] {
      height: 2rem;
      width: 7rem;
      font-size: 0.7rem;
    }
  }

`;
