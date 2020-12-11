import styled from "styled-components";

export default styled.div`
  border: 2px solid
    ${(props) => (props.theme === "pokemon" ? "#3b4cca" : "white")};
  background-color: ${(props) =>
    props.theme === "pokemon" ? "#ffff56" : "black"};
  border-radius: 2em;
  padding: 10px;
  display: inline-block;
  text-align: center;
  width: 22.5%;
  margin: 6px 3px;
`;

export const PokemonName = styled.p`
  color: ${(props) => (props.theme === "pokemon" ? "lightcoral" : "white")};
  -webkit-text-stroke: ${(props) =>
    props.theme === "pokemon" ? "1px red" : ""};
  font-size: 1.5em;
`;
