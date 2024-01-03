import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const Participation = () => {
  const [ranks, setRanks] = useState([]);

  const fetchParticipationData = async () => {
    const rank = await axios.get(`${SERVER_BASE_URL}/allmatchcount`);
    for (const player of rank.data) {
      player.match_count = player.starting_count + player.sub_count;
      const id = player.ID;
      const personalMatchInfo = await axios.post(
        `${SERVER_BASE_URL}/personalmatchinfo`,
        {
          id,
        }
      );

      player.goal = personalMatchInfo.data.goal;
      player.assist = personalMatchInfo.data.assist;
      player.lp = personalMatchInfo.data.lp;
    }

    setRanks(rank.data);
  };

  useEffect(() => {
    fetchParticipationData();
  }, []);

  return (
    <>
      <S.Title>선수별 기록</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.NameTh>이름</S.NameTh>
              <S.MatchNumTh>출전</S.MatchNumTh>
              <S.PositionTh>포지션</S.PositionTh>
              <S.GoalTh>득점</S.GoalTh>
              <S.AssistTh>도움</S.AssistTh>
              <S.LpTh>실점</S.LpTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {ranks.map((rank, index) => (
              <S.TbodyTr key={index}>
                <S.NameTd>{rank.KOR_NM}</S.NameTd>
                <S.MatchNumTd>{rank.match_count}경기</S.MatchNumTd>
                <S.PositionTd>{rank.POSITION_FIRST}</S.PositionTd>
                <S.GoalTd>{rank.goal}득점</S.GoalTd>
                <S.AssistTd>{rank.assist}도움</S.AssistTd>
                <S.LpTd>{rank.lp}실점</S.LpTd>
              </S.TbodyTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Participation;
