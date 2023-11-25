import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const Goal = () => {
  const [ranks, setRanks] = useState([]);

  const fetchGoalData = async () => {
    const rank = await axios.get("http://localhost:4000/goalrank");

    for (const player of rank.data) {
      const id = player.PLAYER_ID;
      const matchCountData = await axios.post(
        `http://localhost:4000/personalmatchcount`,
        {
          id,
        }
      );

      player.matchCount = matchCountData.data.matchCount;
    }

    setRanks(rank.data);
  };

  useEffect(() => {
    fetchGoalData();
  }, []);

  return (
    <>
      <S.Title>득점순위</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.RankTh>순위</S.RankTh>
              <S.NameTh>이름</S.NameTh>
              <S.PositionTh>포지션</S.PositionTh>
              <S.ScoreTh>득점</S.ScoreTh>
              <S.MatchTh>경기</S.MatchTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {ranks.map((rank, index) => (
              <S.TbodydTr key={index}>
                <S.RankTd>{index + 1}</S.RankTd>
                <S.NameTd>{rank.Player.KOR_NM}</S.NameTd>
                <S.PositionTd>{rank.Player.POSITION_FIRST}</S.PositionTd>
                <S.ScoreTd>{rank.goal_count}골</S.ScoreTd>
                <S.MatchTd>{rank.matchCount}경기</S.MatchTd>
              </S.TbodydTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Goal;
