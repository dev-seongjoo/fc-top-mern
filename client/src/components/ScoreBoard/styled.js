import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 30px 0;
`;

export const Time = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export const RecordingBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;
`;

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 20px 0;
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
