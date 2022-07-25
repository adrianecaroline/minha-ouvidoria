import styled, {css} from "styled-components";

export const Container = styled.section `
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: #1e2e7ad4;
  opacity: 0;
  pointer-events: none;
  transition: .3s;
  transform: translateY(-10px);

  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);

  `}

  > nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 6rem;

    ul {
      list-style-type: none;
      text-align: center;
      align-items: center;
      margin: 0;
      padding: 0;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      color: aliceblue;
      font-size: 20px;
      word-spacing: 4px;
    
      li:hover {
        color: #51e682;
        cursor: pointer;
      }
    }

    > button {
      padding: 8px 44px;
      border: none;
      border-radius: 3px;
      background: #235ae2;
      color: #ffff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }

  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

`;