import styled from "styled-components";

export default styled.header`
  background: ${(props) => (props.theme === "pokemon" ? "lightblue" : "black")};
  color: ${(props) => (props.theme === "pokemon" ? "black" : "white")};
  text-align: center;
  padding: 10px;
`;

export const PageTitle = styled.h1`
  color: ${(props) => (props.theme === "pokemon" ? "yellow" : "white")};
  letter-spacing: 12px;
  text-shadow: ${(props) =>
    props.theme === "pokemon" ? "4px 4px #ff0000" : "none"};
  font-size: 48px;
  -webkit-text-stroke: ${(props) =>
    props.theme === "pokemon" ? "3px #3b4cca" : "none"};
`;

export const HeaderLink = styled.button`
  border: 2px ${(props) => (props.theme === "pokemon" ? "#3b4cca" : "white")}
    solid;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.theme === "pokemon" ? "yellow" : "gray"};
  }
  color: ${(props) => (props.theme === "pokemon" ? "black" : "white")};
  background-color: ${(props) =>
    props.theme === "pokemon" ? "#efefef" : "black"};
  outline: none;
  font-size: 18px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 5px 12px 12px 12px;
`;
