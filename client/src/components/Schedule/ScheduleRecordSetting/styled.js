import { Link } from "react-router-dom";
import styled from "styled-components";
import uniform from "../../../assets/uniform.png";

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
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  width: 300px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px solid black;
`;

export const Select = styled.select`
  width: 18.75rem;
  height: 3.125rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  font-size: 1rem;
  font-weight: 700;
`;

export const StartingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StartingLineupSetupWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StartingLineupSetup = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 5px;
`;

export const StartingLineupSetupBtn = styled.span`
  font-size: 1.2rem;
`;

export const StartingLineup = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
`;

export const Field = styled.img`
  width: 100%;
  height: 100%;
`;

export const Player = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: url(${uniform}) no-repeat center center/cover;
`;

export const RecordBtn = styled.button`
  width: 300px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border: 3px solid black;
  background-color: transparent;
`;
