import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  background-color: black;
  border-bottom: 1px solid white;
`;

export const TitleRow = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SearchBtn = styled(Link)`
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
`;

export const Date = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScoreGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTeamGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeTeam = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

export const HomeScore = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

export const Versus = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin: 20px 0;
`;

export const AwayTeamGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AwayTeam = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

export const AwayScore = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;
