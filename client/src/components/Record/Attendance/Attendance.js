import * as S from "./styled";
import { useEffect } from "react";
import axios from "axios";

const Attendance = () => {
  const dummyData = [
    {
      rank: 1,
      name: "김성주",
      position: "ST",
      goal: 5,
      match: 5,
      goalPerMatch: 1,
    },
    {
      rank: 2,
      name: "박지성",
      position: "CDM",
      goal: 4,
      match: 6,
      goalPerMatch: 0.67,
    },
    {
      rank: 3,
      name: "황의조",
      position: "LW",
      goal: 4,
      match: 7,
      goalPerMatch: 0.57,
    },
    {
      rank: 4,
      name: "손흥민",
      position: "RW",
      goal: 3,
      match: 5,
      goalPerMatch: 0.6,
    },
    {
      rank: 5,
      name: "이승우",
      position: "LM",
      goal: 3,
      match: 6,
      goalPerMatch: 0.5,
    },
    {
      rank: 6,
      name: "이강인",
      position: "RM",
      goal: 2,
      match: 5,
      goalPerMatch: 0.4,
    },
    {
      rank: 7,
      name: "조현우",
      position: "GK",
      goal: 2,
      match: 6,
      goalPerMatch: 0.33,
    },
    {
      rank: 8,
      name: "기성용",
      position: "CAM",
      goal: 1,
      match: 5,
      goalPerMatch: 0.2,
    },
    {
      rank: 9,
      name: "김영권",
      position: "CB",
      goal: 1,
      match: 7,
      goalPerMatch: 0.14,
    },
    {
      rank: 10,
      name: "구자철",
      position: "RB",
      goal: 0,
      match: 6,
      goalPerMatch: 0,
    },
  ];

  return (
    <>
      <S.Title>출석순위</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.RankTh>순위</S.RankTh>
              <S.NameTh>이름</S.NameTh>
              <S.AttendanceTh>참석</S.AttendanceTh>
              <S.LatenessTh>무단지각</S.LatenessTh>
              <S.AbsenceTh>무단불참</S.AbsenceTh>
              <S.ScoreTh>점수</S.ScoreTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <S.TbodydTr key={index}>
                <S.RankTd>{data.rank}</S.RankTd>
                <S.NameTd>{data.name}</S.NameTd>
                <S.AttendanceTd>{data.goal} 회</S.AttendanceTd>
                <S.LatenessTd>{data.match} 회</S.LatenessTd>
                <S.AbsenceTd>{data.match} 회</S.AbsenceTd>
                <S.ScoreTd>{data.goalPerMatch} 점</S.ScoreTd>
              </S.TbodydTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Attendance;
