import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 60px 0;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardGroup = styled.div`
  margin-bottom: 30px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 5px;
  margin-bottom: 30px;
`;

export const CardTitle = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CardSearch = styled(Link)`
  color: black;
  font-weight: 700;
  text-decoration: none;
`;

export const Card = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Year = styled.div`
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const InfoAttendanceGroup = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

export const InfoRecordGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const InfoDetailGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoDetail = styled.div`
  margin-bottom: 12px;
  font-size: 1.2rem;
`;

export const InfoDetailKey = styled.span`
  margin-right: 5px;
  font-weight: 700;
`;

export const InfoBigChar = styled.div`
  margin-top: 30px;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const MatchRecordGroup = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const MatchRecordGoal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
