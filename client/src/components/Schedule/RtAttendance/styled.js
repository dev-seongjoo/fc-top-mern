import styled, { css } from "styled-components";

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
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const Notice = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const MyLocationBtn = styled.button`
  width: 300px;
  height: 50px;
  background-color: transparent;
  border: 3px solid black;
  margin-top: 10px;
`;

export const DistanceNotice = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const AttendanceBtn = styled.button`
  width: 300px;
  height: 50px;
  border: 3px solid black;
  color: black;
  background-color: transparent;
  margin-top: 10px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc; /* 회색 배경 */
      color: white; /* 글자색 흰색 */
      cursor: not-allowed; /* 커서 스타일 변경 */
    `}
`;
