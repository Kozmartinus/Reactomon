import React from "react";
import PaginationElement, {
  PaginationDiv,
} from "../elements/PaginationElement";
import { HeaderLink as PaginationButton } from "../elements/HeaderElement";

const Pagination = (props) => {
  const { next, previous } = props.paginationLinks;
  const previousButton = (
    <PaginationButton onClick={props.loadContent.bind(this, previous)}>
      Previous page
    </PaginationButton>
  );
  const nextButton = (
    <PaginationButton onClick={props.loadContent.bind(this, next)}>
      Next page
    </PaginationButton>
  );
  return (
    <PaginationElement>
      <PaginationDiv>{previous ? previousButton : ""}</PaginationDiv>
      <PaginationDiv>{next ? nextButton : ""}</PaginationDiv>
    </PaginationElement>
  );
};

export default Pagination;
