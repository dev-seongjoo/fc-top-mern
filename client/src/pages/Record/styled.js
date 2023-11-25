import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecordPageNav = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const NavList = styled(Link)`
  color: black;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  border-bottom: ${(props) => (props.selected ? "2px solid black" : "none")};
  padding-bottom: 5px;
  margin: 0 20px;
`;
