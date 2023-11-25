import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 30px;
  z-index: 100;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  padding: 10px;
`;

export const LogoImg = styled.img`
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuIcon = styled.span`
  position: absolute;
  right: 30px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const MenuList = styled.div`
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  background-color: #ccc;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled(Link)`
  color: white;
  margin-left: 10px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

export const NavRight = styled.div`
  display: flex;
`;

export const Auth = styled.div`
  display: flex;
`;

export const Seperation = styled.div`
  margin-left: 10px;
  color: white;
`;

export const AuthLink = styled(Link)`
  color: white;
  margin-left: 10px;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

export const ArrowBack = styled.span`
  color: white;
`;
