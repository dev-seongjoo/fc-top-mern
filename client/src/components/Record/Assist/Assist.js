import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const Assist = () => {
  const [ranks, setRanks] = useState([]);

  const fetchAssistData = async () => {
    const rank = await axios.get(`${SERVER_BASE_URL}/assistrank`);

    for (const player of rank.data) {
      const id = player.PLAYER_ID;
      const matchCountData = await axios.post(
        `${SERVER_BASE_URL}/personalmatchcount`,
        {
          id,
        }
      );

      player.matchCount = matchCountData.data.matchCount;
    }

    setRanks(rank.data);
  };

  useEffect(() => {
    fetchAssistData();
  }, []);

  return (
    <>
      <S.Title>도움순위</S.Title>
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
              <S.ScoreTh>도움</S.ScoreTh>
              <S.MatchTh>경기</S.MatchTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {ranks.map((rank, index) => (
              <S.TbodydTr key={index}>
                <S.RankTd>{index + 1}</S.RankTd>
                <S.NameTd>{rank.Player.KOR_NM}</S.NameTd>
                <S.PositionTd>{rank.Player.POSITION_FIRST}</S.PositionTd>
                <S.ScoreTd>{rank.assist_count}도움</S.ScoreTd>
                <S.MatchTd>{rank.matchCount}경기</S.MatchTd>
              </S.TbodydTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Assist;
