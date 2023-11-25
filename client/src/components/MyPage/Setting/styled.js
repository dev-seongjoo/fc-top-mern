import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
  margin: 60px 0px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SettingLinkGroup = styled(Link)`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  margin-top: 50px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

export const SettingLink = styled.span`
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ArrowForwardBtn = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
`;
