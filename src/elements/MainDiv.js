import styled from "styled-components";

export default styled.div`
  background: ${(props) => (props.theme === "pokemon" ? "#c9eaf5" : "black")};
`;
