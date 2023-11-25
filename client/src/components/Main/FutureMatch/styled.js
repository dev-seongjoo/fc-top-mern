import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
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

export const SearachBtnGroup = styled.div``;

export const SearchBtnLeft = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 5px;
`;
export const SearchBtnRight = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Date = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

export const Location = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScoreGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeTeam = styled.div`
  margin-bottom: 10px;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const Versus = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 900;
  margin: 10px 0;
`;

export const AwayTeam = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const VotingBtn = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`;
