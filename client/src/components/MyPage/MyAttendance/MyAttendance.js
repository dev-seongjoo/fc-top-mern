import React from "react";
import * as S from "./styled";

const MyAttendance = () => {
  const dummyData = [
    {
      id: 1,
      matchDate: "2024/01/06",
      opponent: "FC AAA",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:27",
      attendanceStatus: "출석",
    },
    {
      id: 2,
      matchDate: "2024/01/13",
      opponent: "FC BBB",
      voting: "불참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:20",
      attendanceStatus: "출석",
    },
    {
      id: 3,
      matchDate: "2024/01/20",
      opponent: "FC CCC",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:33",
      attendanceStatus: "무단 지각",
    },
  ];

  return (
    <S.Container>
      <S.Title>출석</S.Title>
      <S.Select>
        <S.Option>2024</S.Option>
      </S.Select>
      <S.Table>
        <thead>
          <S.TheadTr>
            <S.MatchDateTh>경기 일자</S.MatchDateTh>
            <S.OpponentTh>상대팀</S.OpponentTh>
            <S.VotingTh>투표</S.VotingTh>
            <S.AttendanceLimitTh>지각 체크</S.AttendanceLimitTh>
            <S.AttendanceTimeTh>출석 시간</S.AttendanceTimeTh>
            <S.AttendanceStatusTh>출석 상태</S.AttendanceStatusTh>
          </S.TheadTr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <S.TbodydTr>
              <S.MatchDateTd>{data.matchDate}</S.MatchDateTd>
              <S.OpponentTd>{data.opponent}</S.OpponentTd>
              <S.VotingTd>{data.voting}</S.VotingTd>
              <S.AttendanceLimitTd>{data.attendanceLimit}</S.AttendanceLimitTd>
              <S.AttendanceTimeTd>{data.attendanceTime}</S.AttendanceTimeTd>
              <S.AttendanceStatusTd>
                {data.attendanceStatus}
              </S.AttendanceStatusTd>
            </S.TbodydTr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default MyAttendance;
