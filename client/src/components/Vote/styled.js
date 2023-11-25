import styled from "styled-components";

export const VoteBox = styled.button`
  width: 300px;
  height: 50px;
  border: 3px solid black;
  background-color: ${(props) =>
    props.selected ? "rgba(0,0,0,0.3)" : "transparent"};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: transparent;
  }
`;
