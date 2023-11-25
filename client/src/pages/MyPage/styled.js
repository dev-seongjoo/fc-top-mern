import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyPageNav = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const NavList = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin: 0 20px;
  padding-bottom: 5px;
  border-bottom: ${(props) => (props.selected ? "2px solid black" : "none")};

  &:hover {
    opacity: 0.3;
    transition: 0.2s;
  }
`;
