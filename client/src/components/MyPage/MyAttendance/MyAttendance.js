import React from "react";
import * as S from "./styled";

const MyAttendance = () => {
  const dummyData = [
    {
      matchDate: "2023/07/01",
      opponent: "FC AAA",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:27",
      attendanceStatus: "출석",
    },
    {
      matchDate: "2023/07/08",
      opponent: "FC BBB",
      voting: "불참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "결석",
    },
    {
      matchDate: "2023/07/15",
      opponent: "FC CCC",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:33",
      attendanceStatus: "지각",
    },
    {
      matchDate: "2023/07/22",
      opponent: "FC DDD",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "결석",
    },
    {
      matchDate: "2023/07/29",
      opponent: "FC EEE",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "07:00",
      attendanceStatus: "지각",
    },
  ];

  return (
    <S.Container>
      <S.Title>출석</S.Title>
      <S.Select>
        <S.Option>2023</S.Option>
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
