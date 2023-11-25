import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background-color: #1a1a1a;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  padding: 0 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const FooterGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterMapGroup = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const FooterDetailGroup = styled.div``;

export const Title = styled.div`
  margin: 2px 0 20px 0;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Info = styled(Link)`
  display: block;
  width: max-content;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 15px;
  text-decoration: none;
`;

export const FooterInfoGroup = styled.div`
  display: flex;
`;

export const FooterInfo = styled.div``;

export const Logo = styled.img`
  width: 120px;
  margin-left: 100px;
  opacity: 0.5;
`;

export const TeamName = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Leader = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CopyRight = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  font-weight: 700;
`;
