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
  margin: 10px 0 50px 0;
`;

export const Container = styled.div`
  width: 100%;
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
  margin-top: -10px;
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
  margin-bottom: 10px;
`;

export const AddrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

export const AddrLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const CopyBtn = styled.button`
  width: 70px;
  font-weight: 700;
  border: 2px solid black;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

export const RoadAddr = styled.div`
  width: 300px;
  margin-top: 5px;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const LotAddr = styled.div`
  width: 300px;
  margin-top: 5px;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VoteResult = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const RecordBtn = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  margin-right: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const UpdateBtn = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  margin-right: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const DeleteBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  color: red;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
