import React, { useState } from "react";
import * as S from "./styled";

const MyRecord = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpandClick = (id) => {
    const currentIndex = expandedRows.indexOf(id);
    const newExpandedRows = [...expandedRows];

    if (currentIndex === -1) {
      newExpandedRows.push(id);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

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
      <S.Title>경기 기록</S.Title>
      <S.Select>
        <S.Option>2024</S.Option>
      </S.Select>
      <S.MainTable>
        <thead>
          <S.TheadTr>
            <S.MatchDateTh>경기 일자</S.MatchDateTh>
            <S.OpponentTh>상대팀</S.OpponentTh>
            <S.VotingTh>자세히 보기</S.VotingTh>
          </S.TheadTr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <>
              <S.TbodyTr key={data.id}>
                <S.MatchDateTd>{data.matchDate}</S.MatchDateTd>
                <S.OpponentTd>{data.opponent}</S.OpponentTd>
                <S.VotingTd>
                  <S.ExpandBtn
                    className='material-symbols-outlined'
                    onClick={() => handleExpandClick(data.id)}
                  >
                    {expandedRows.includes(data.id)
                      ? "expand_less"
                      : "expand_more"}
                  </S.ExpandBtn>
                </S.VotingTd>
              </S.TbodyTr>
              {expandedRows.includes(data.id) && (
                <S.TbodyTr>
                  <td colSpan={3}>
                    <S.SubTable>
                      <thead>
                        <S.SubTheadTr>
                          <S.QuaterTh>쿼터</S.QuaterTh>
                          <S.PositionTh>포지션</S.PositionTh>
                          <S.ParticipationTimeTh>
                            출전 시간
                          </S.ParticipationTimeTh>
                          <S.PersonalGoalTh>득점</S.PersonalGoalTh>
                          <S.PersonalAssistTh>도움</S.PersonalAssistTh>
                          <S.LpTh>실점</S.LpTh>
                          <S.OgTh>자책</S.OgTh>
                        </S.SubTheadTr>
                      </thead>
                      <tbody>
                        <S.SubTbodyTr>
                          <S.QuaterTd>1Q</S.QuaterTd>
                          <S.PositionTd>LW</S.PositionTd>
                          <S.ParticipationTimeTd>22분</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>1득점</S.PersonalGoalTd>
                          <S.PersonalAssistTd>0도움</S.PersonalAssistTd>
                          <S.LpTd>0</S.LpTd>
                          <S.OgTd>0</S.OgTd>
                        </S.SubTbodyTr>
                        <S.SubTbodyTr>
                          <S.QuaterTd>2Q</S.QuaterTd>
                          <S.PositionTd>미출전</S.PositionTd>
                          <S.ParticipationTimeTd>미출전</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>미출전</S.PersonalGoalTd>
                          <S.PersonalAssistTd>미출전</S.PersonalAssistTd>
                          <S.LpTd>미출전</S.LpTd>
                          <S.OgTd>미출전</S.OgTd>
                        </S.SubTbodyTr>
                        <S.SubTbodyTr>
                          <S.QuaterTd>3Q</S.QuaterTd>
                          <S.PositionTd>LW</S.PositionTd>
                          <S.ParticipationTimeTd>23분</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>1득점</S.PersonalGoalTd>
                          <S.PersonalAssistTd>1도움</S.PersonalAssistTd>
                          <S.LpTd>0</S.LpTd>
                          <S.OgTd>0</S.OgTd>
                        </S.SubTbodyTr>
                        <S.SubTbodyTr>
                          <S.QuaterTd>4Q</S.QuaterTd>
                          <S.PositionTd>미출전</S.PositionTd>
                          <S.ParticipationTimeTd>미출전</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>미출전</S.PersonalGoalTd>
                          <S.PersonalAssistTd>미출전</S.PersonalAssistTd>
                          <S.LpTd>미출전</S.LpTd>
                          <S.OgTd>미출전</S.OgTd>
                        </S.SubTbodyTr>
                        <S.SubTbodyTr>
                          <S.QuaterTd>5Q</S.QuaterTd>
                          <S.PositionTd>LW</S.PositionTd>
                          <S.ParticipationTimeTd>20분</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>0득점</S.PersonalGoalTd>
                          <S.PersonalAssistTd>0도움</S.PersonalAssistTd>
                          <S.LpTd>0</S.LpTd>
                          <S.OgTd>0</S.OgTd>
                        </S.SubTbodyTr>
                        <S.SubTbodyTr>
                          <S.QuaterTd>6Q</S.QuaterTd>
                          <S.PositionTd>LW</S.PositionTd>
                          <S.ParticipationTimeTd>5분</S.ParticipationTimeTd>
                          <S.PersonalGoalTd>0득점</S.PersonalGoalTd>
                          <S.PersonalAssistTd>2도움</S.PersonalAssistTd>
                          <S.LpTd>0</S.LpTd>
                          <S.OgTd>0</S.OgTd>
                        </S.SubTbodyTr>
                      </tbody>
                    </S.SubTable>
                  </td>
                </S.TbodyTr>
              )}
            </>
          ))}
        </tbody>
      </S.MainTable>
    </S.Container>
  );
};

export default MyRecord;
