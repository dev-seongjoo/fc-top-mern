import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 20px 0;
`;
export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TeamName = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const HomeTeamScore = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export const Versus = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const AwayTeamScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AwayTeamScore = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 10px;
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
`;

export const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const RecordHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const RecordBody = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const ListBtn = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: black;
  background-color: transparent;
  border: 3px solid black;
  padding: 5px;
`;
