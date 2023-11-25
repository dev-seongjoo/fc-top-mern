import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 10px 3px;
  border: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const Year = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const Month = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const EmptyNotice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export const MatchBox = styled(Link)`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  color: black;
  text-decoration: none;
`;

export const MatchCalendar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MatchDate = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10px;
`;

export const MatchTime = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const MatchPlace = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const TeamGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeTeam = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const AwayTeam = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const VersusGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const Versus = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const Round = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 1px;
`;

export const BtnGroup = styled.div`
  display: flex;
`;

export const VideoBtn = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  background-color: #c70101;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

export const RecordBtn = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const AttendanceBtn = styled.button`
  width: 150px;
  height: 50px;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border: 3px solid black;
  border-radius: 5px;
`;

export const UploadBtn = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 30px;
`;
