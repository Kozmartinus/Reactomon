import styled from "styled-components";

export default styled.header`
  background: lightblue;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export const PageTitle = styled.h1`
  color: yellow;
  letter-spacing: 12px;
  text-shadow: 4px 4px #ff0000;
  font-size: 48px;
  -webkit-text-stroke: 3px #3b4cca;
`;

export const HeaderLink = styled.button`
  border: 2px #3b4cca solid;
  border-radius: 5px;
  &:hover {
    background-color: yellow;
  }
  outline: none;
  font-size: 18px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 5px 12px 12px 12px;
`;
