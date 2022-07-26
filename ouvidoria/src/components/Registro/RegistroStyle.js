import styled from "styled-components";

export const Container = styled.div `
  background-color: #ffffff;
  width: 340px;
  height: 90px;
  border-radius: 6px;
  box-shadow: 0px 3px 4px 1px rgb(0 0 0 / 25%);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;

  .icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    :hover{
      transform: translateX(8px);
    }
  }

  p {
    font-size: 14px;
  }

`;