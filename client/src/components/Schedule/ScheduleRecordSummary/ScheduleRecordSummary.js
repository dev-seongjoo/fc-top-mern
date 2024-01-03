import { useEffect, useState } from "react";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import axios from "axios";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const ScheduleRecordSummary = () => {
  const { match, quarter } = useParams();

  const [opponent, setOpponent] = useState("");
  const [fullTime, setFullTime] = useState(0);
  const [goals, setGoals] = useState([]);
  const [subs, setSubs] = useState([]);
  const [lps, setLps] = useState([]);

  const fetchMatchInfo = async () => {
    const matchInfo = await axios.get(`${SERVER_BASE_URL}/schedule/${match}`);
    setOpponent(matchInfo.data.OPPONENT);
  };

  const fetchQuarterRecord = async () => {
    const quarterInfo = await axios.get(
      `${SERVER_BASE_URL}/schedule/${match}/${quarter}`
    );

    const quarterRecordInfo = await axios.get(
      `${SERVER_BASE_URL}/data/${match}/${quarter}`
    );

    setGoals(quarterRecordInfo.data.goals);
    setSubs(quarterRecordInfo.data.subs);
    setLps(quarterRecordInfo.data.lps);
    setFullTime(quarterInfo.data.FULL_TIME);
  };

  useEffect(() => {
    fetchMatchInfo();
    fetchQuarterRecord();
  }, []);

  const subsByTime = {};
  subs.forEach((sub) => {
    if (!subsByTime[sub.SUB_TIME]) {
      subsByTime[sub.SUB_TIME] = [];
    }
    subsByTime[sub.SUB_TIME].push(sub);
  });

  const formattedSubs = [];
  for (const time in subsByTime) {
    const formattedTime = `${String(Math.floor(time / 60)).padStart(
      2,
      "0"
    )}분 ${String(time % 60).padStart(2, "0")}초`;

    const inSubs = subsByTime[time].filter((sub) => sub.SUB === "IN");
    const outSubs = subsByTime[time].filter((sub) => sub.SUB === "OUT");

    const inPlayers = inSubs.map((sub) => `교체 IN ${sub.Player.KOR_NM}`);
    const outPlayers = outSubs.map((sub) => `교체 OUT ${sub.Player.KOR_NM}`);

    formattedSubs.push(
      `${formattedTime}, ${inPlayers.join(", ")}, ${outPlayers.join(", ")}`
    );
  }

  return (
    <>
      <S.Title>{`${quarter}Q 결과`}</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.TeamContainer>
          <S.TeamWrapper>
            <S.TeamName>FC TOP</S.TeamName>
            <S.HomeTeamScore>{goals.length}</S.HomeTeamScore>
          </S.TeamWrapper>
          <S.Versus>VS</S.Versus>
          <S.TeamWrapper>
            <S.TeamName>{opponent}</S.TeamName>
            <S.AwayTeamScoreWrapper>
              <S.AwayTeamScore>{lps.length}</S.AwayTeamScore>
            </S.AwayTeamScoreWrapper>
          </S.TeamWrapper>
        </S.TeamContainer>
        <S.HorizontalLine />
        <S.RecordContainer>
          <S.RecordWrapper>
            {goals.length !== 0 && <S.RecordHeader>득점</S.RecordHeader>}
            {goals.map((goal, index) => (
              <S.RecordBody key={index}>{`${String(
                Math.floor(goal.GOAL_TIME / 60)
              ).padStart(2, "0")}분 ${String(goal.GOAL_TIME % 60).padStart(
                2,
                "0"
              )}초, 득점: ${goal.Player.KOR_NM}, 도움: ${
                goal.assists.length === 0
                  ? "없음"
                  : goal.assists[0].Player.KOR_NM
              }`}</S.RecordBody>
            ))}
          </S.RecordWrapper>
          <S.RecordWrapper>
            {subs.length !== 0 && <S.RecordHeader>교체</S.RecordHeader>}
            {formattedSubs.map((sub, index) => (
              <S.RecordBody key={index}>{sub}</S.RecordBody>
            ))}
          </S.RecordWrapper>
          <S.RecordWrapper>
            {lps.length !== 0 && <S.RecordHeader>실점</S.RecordHeader>}
            {lps.map((lp, index) => (
              <S.RecordBody key={index}>{`${String(
                Math.floor(lp.LP_TIME / 60)
              ).padStart(2, "0")}분 ${String(lp.LP_TIME % 60).padStart(
                2,
                "0"
              )}초, 실점: ${lp.Player.KOR_NM}`}</S.RecordBody>
            ))}
          </S.RecordWrapper>
        </S.RecordContainer>
        <S.ListBtn to={`/schedule/recordsetting/${match}`}>확인</S.ListBtn>
      </S.Container>
    </>
  );
};

export default ScheduleRecordSummary;
